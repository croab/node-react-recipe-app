import React, { Component } from 'react';
import recipeCardStyles from './recipeCard.module.css'

export default class RecipeCard extends Component {
  render() {
    return (
      <div class={recipeCardStyles.card}>
        <p>Breakfast</p>
      </div>
    )
  }
}