import React from "react";
import RecipeListAll from "../components/recipes/recipeListAll";
import recipeStyles from "./recipes.module.css";

function Recipes() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div>
      <main>
        <h2 className={recipeStyles.title}>All recipes</h2>
        <RecipeListAll />
      </main>
    </div>
  );
}

export default Recipes;