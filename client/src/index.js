import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import Recipes from './routes/recipes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="recipes" element={<Recipes />} />
      {/* <Route path="cookbooks" element={<Cookbooks />} /> */}
    </Routes>
  </BrowserRouter>
);
