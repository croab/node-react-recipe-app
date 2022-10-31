import React, { Component } from 'react';
import recipeCardStyles from './recipeCard.module.css'

function RecipeCard(props) {
  return (
    <div className={recipeCardStyles.card}>
      <p className={recipeCardStyles.cardText}>{props.title}</p>
    </div>
  )
}

export default RecipeCard;