import React from 'react';

import RecipeCardComplex from './recipeCardComplex';
import recipeListStyles from './../../assets/styles/recipeListAll.module.css'

function RecipeListAll() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3001/api/v1/recipes/")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.data);
      });
  }, []);

  return (
    <div>
      <div className={recipeListStyles.cardList}>
        {!data ? "Loading..." : data.map((data) => <RecipeCardComplex id={ data._id } key={ data._id } cardData={data} />)}
      </div>
    </div>
  )
}

export default RecipeListAll;