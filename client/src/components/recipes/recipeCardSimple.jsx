import React, { Component } from 'react';
import recipeCardStyles from './recipeCardSimple.module.css'

function RecipeCardSimple(props) {
  return (
    <div className={recipeCardStyles.card}>
      <p className={recipeCardStyles.cardText}>{props.title}</p>
    </div>
  )
}

export default RecipeCardSimple;