import React from "react";

import RecipeListAll from "./../../components/recipes/recipeListAll";
import recipeStyles from "./../../assets/styles/recipes.module.css";

import Button from './../../components/shared/button';
import buttonStyles from './../../assets/styles/button.module.css';

function AllRecipes() {
  return (
    <div>
      <main>
        <h2 className={recipeStyles.title}>All recipes</h2>
        <div className={buttonStyles.buttonContainer}>
          <Button path='/recipes/new' />
        </div>
        <RecipeListAll />
      </main>
    </div>
  );
}

export default AllRecipes;