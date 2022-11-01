import React from 'react';
import { Route, Routes } from "react-router-dom";

// Roots of pages
// import Cookbooks from "./routes/cookbooks";
import Home from "./../pages/home";
// import Signup from "./routes/signup";
import AllRecipes from './../pages/recipes/allRecipes';
import NewRecipe from './../pages/recipes/newRecipe';
import ShowRecipe from './../pages/recipes/showRecipe';

function PagesRouter() {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route path="/" element={<Home />} />
      {/* RECIPE ROUTES */}
      <Route path="recipes" element={<AllRecipes />} />
      <Route path="recipes/:id" element={<ShowRecipe />} />
      <Route path="recipes/new" element={<NewRecipe />} />
      {/* COOKBOOK ROUTES */}
      {/* <Route path="cookbooks" element={<Cookbooks />} /> */}
      {/* TEST */}
      {/* <Route path="upload" element={<FilesUploadComponent />} /> */}
      {/* AUTHENTICATION */}
      {/* <Route path="users/signup" element={<Signup />} /> */}
      {/* <Route path="users/login" element={<FilesUploadComponent />} /> */}
    </Routes>
  )
}

export default PagesRouter;
