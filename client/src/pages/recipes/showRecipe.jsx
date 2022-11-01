import React from "react";
import { useParams } from "react-router-dom";
// import recipeStyles from "./recipes.module.css";
import RecipeCardShow from './../../components/recipes/recipeCardShow';

function ShowRecipe() {
  const [data, setData] = React.useState(null);
  const { id } = useParams();

  React.useEffect(() => {
    fetch(`http://localhost:3001/api/v1/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div>
      <main>
        {!data ? "Loading..." : <RecipeCardShow data={data} />}
      </main>
    </div>
  );
}

export default ShowRecipe;