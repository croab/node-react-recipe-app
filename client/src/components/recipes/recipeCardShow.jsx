import React, { Component } from 'react';

import showRecipeStyles from './../../assets/styles/recipeCardShow.module.css';
import Ingredient from './ingredient';

class RecipeCardShow extends Component {
  constructor(props) {
    super(props);
    this._id = props.data._id;
    this.title = props.data.title;
    this.image = props.data.image;
    this.ingredients = props.data.ingredients;
    this.description = props.data.description;
    this.cuisine = props.data.cuisine;
    this.preparationTime = props.data.preparationTime;
    this.cookingTime = props.data.cookingTime;
    this.dietary = props.data.dietary;
    this.serves = props.data.serves;
    this.difficulty = props.data.difficulty;
    this.ratingsAverage = props.data.ratingsAverage;
    this.contributingChefs = props.data.contributingChefs;
  }
  render() {
    let ingredients = [];
    let key = 0;
    this.ingredients.forEach(ingredient => {
      ingredients.push(<Ingredient key={key} ingredient={ingredient} />);
      console.log(ingredient);
      key += 1;
    });

    return (
      <div>
        <div>
          <div className={showRecipeStyles.background}>
            <div className={showRecipeStyles.title}>
              <h1>{this.title.toUpperCase()}</h1>
            </div>
          </div>
          <div className={showRecipeStyles.infoIcons}>
            <div className={`${showRecipeStyles.greenIcon} ${showRecipeStyles.iconBox}`}>
              <h3><i class="fa-regular fa-user"></i> {this.serves}</h3>
            </div>
            <div className={`${showRecipeStyles.orangeIcon} ${showRecipeStyles.iconBox}`}>
              <h3><i className="fa-regular fa-clock"></i> {this.preparationTime + this.cookingTime}</h3>
            </div>
            <div className={`${showRecipeStyles.pinkIcon} ${showRecipeStyles.iconBox}`}>
              <h3>Difficulty: {this.difficulty}</h3>
            </div>
          </div>
        </div>
        <div className={showRecipeStyles.recipeBody}>
          <div className={showRecipeStyles.recipeBodyLeft}>
            <h3>INGREDIENTS</h3>
            <ul className={showRecipeStyles.ingredients}>
              {ingredients}
            </ul>
          </div>
          <div className={showRecipeStyles.methods}>
            <ol className={showRecipeStyles.methodList}>
              <li className={showRecipeStyles.methodListItem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li className={showRecipeStyles.methodListItem}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li className={showRecipeStyles.methodListItem}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
              <li className={showRecipeStyles.methodListItem}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default RecipeCardShow;