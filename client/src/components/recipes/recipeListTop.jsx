import React, { Component } from 'react';
import RecipeCardSimple from './recipeCardSimple';
import recipeListStyles from './recipeListTop.module.css'

function RecipeListTop() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/recipes/top-6-recipes")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div className={recipeListStyles.cardList}>
      {!data ? "Loading..." : data.map(({ _id, title }) => <RecipeCardSimple id={ _id } key={ _id } title={ title } />)}
    </div>
  )
}

export default RecipeListTop;