import React, { Component } from 'react';
import RecipeCard from './recipeCard';
import recipeListStyles from './recipeList.module.css'

function RecipeList() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/recipes/top-6-recipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      });
  }, []);

  return (
    <div className={recipeListStyles.cardList}>
      {data.map(({ _id, title }) => <RecipeCard id={ _id } key={ _id } title={ title } />)}
      {/* <RecipeCard name={!data ? "Loading..." : data[1].title} /> */}
    </div>
  )
}

export default RecipeList;