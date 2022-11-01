import React from 'react';

function RecipeListTop(props) {
  return (
    <li>{`${props.ingredient.ingredientName}`}</li>
  )
}

export default RecipeListTop;