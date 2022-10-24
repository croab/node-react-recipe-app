const Review = require('./../models/reviewModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');

// GET ALL REVIEWS
exports.getAllReviews = catchAsync(async (req, res, next) => {
  let filter = {};
  if (req.params.recipeId) filter = { recipe: req.params.recipeId };
  const reviews = await Review.find(filter);
  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews: reviews
    }
  });
});

// SET RECIPE AND USER IDs
exports.setRecipeAndUserIds = (req, res, next) => {
  if (!req.body.recipe) req.body.recipe = req.params.recipeId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

// CREATE REVIEW
exports.createReview = factory.createOne(Review);

// UPDATE REVIEW
exports.updateReview = factory.updateOne(Review);

// DELETE REVIEW
exports.deleteReview = factory.deleteOne(Review);