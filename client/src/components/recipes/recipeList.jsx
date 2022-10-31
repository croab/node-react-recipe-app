import React, { Component } from 'react';
import RecipeCard from './recipeCard';
import recipeListStyles from './recipeList.module.css'

export default class RecipeList extends Component {
  render() {
    return (
      <div class={recipeListStyles.cardList}>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </div>
    )
  }
}