import React, { Component } from 'react';
import { Link } from "react-router-dom";
import recipeCardStyles from './../../assets/styles/recipeCardSimple.module.css'

function RecipeCardSimple(props) {
  return (
    <Link to={`recipes/${props.id}`} className={recipeCardStyles.card} >
      <p className={recipeCardStyles.cardText}>{props.title}</p>
    </Link>
  )
}

export default RecipeCardSimple;