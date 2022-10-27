// Imports
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

const CustomError = require('./utils/customError');
const globalErrorHandler = require('./controllers/errorController');

const recipeRouter = require('./routes/recipeRoutes');
const cookbookRouter = require('./routes/cookbookRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const restaurantRouter = require('./routes/restaurantRoutes');

// Instantiate app
const app = express();

// Set templating engine
app.set('view engine', 'pug');
// To limit '/' bugs
app.set('views', path.join(__dirname, 'views'))

// GLOBAL MIDDLEWARE =========================================
// Use cors
app.use(cors());

// Serve static files
// Have Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, './../client/build')));
// app.use(express.static(path.join(__dirname, 'public')));

// SET SECURITY HTTP HEADERS
// App.use needs function not a function call
// helmet() returns this function which stays until called
app.use(helmet());

// DEV LOGGING
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('tiny'));
}

// REQUEST LIMITING
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 100,
  message: 'Too many requests from this IP. Please try again in an hour.'
});
app.use('/api', limiter);

// BODY PARSING (put data from body into req.body)
// Limit data coming in body
app.use(express.json({ limit: '10kb' }));

// DATA SANITIZATION VS NOSQL QUERY INJECTION
app.use(mongoSanitize());

// DATA SANTIZATION VS CROSS-SITE SCRIPTING ATTACKS
app.use(xss());

// PROTECT VS PARAM POLLUTION
app.use(hpp({
  whitelist: [
    'preparationTime',
    'cookingTime',
    'serves',
    'difficulty',
    'price'
  ]
}));

// MOUNT ROUTES ===============================================

app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/cookbooks', cookbookRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/restaurants', restaurantRouter);

// If above routes are not found trigger the below
app.use('*', (req, res, next) => {
  next(new CustomError(
    `Cannot find ${req.originalUrl} on this server.`,
    404
  ));
});

// Then handle all errors if any arise - TODO
app.use(globalErrorHandler);

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../client/build', 'index.html'));
});

module.exports = app;
