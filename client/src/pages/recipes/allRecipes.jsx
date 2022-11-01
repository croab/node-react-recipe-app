import React from "react";

import RecipeListAll from "./../../components/recipes/recipeListAll";
import recipeStyles from "./../../assets/styles/recipes.module.css";

function AllRecipes() {
  return (
    <div>
      <main>
        <h2 className={recipeStyles.title}>All recipes</h2>
        <RecipeListAll />
      </main>
    </div>
  );
}

export default AllRecipes;