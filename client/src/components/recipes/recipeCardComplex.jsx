import React, { Component } from 'react';
import recipeCardStyles from './recipeCardComplex.module.css'
import StarList from '../ratings/starsList';

function RecipeCardSimple(props) {
  const {
     _id,
     title,
     image,
     description,
     cuisine,
     preparationTime,
     cookingTime,
     dietary,
     difficulty,
     ratingsAverage
  } = props.cardData;

  return (
    <div className={recipeCardStyles.cardProduct}>
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
      <div className={recipeCardStyles.cardSections}>
        <div className={`${recipeCardStyles.cardProductInfos} ${recipeCardStyles.greenDiv}`}>
          <h2>{title}</h2>
          <p>{description}</p>
          <StarList ratingsAverage = {ratingsAverage} />
        </div>
        <div className={`${recipeCardStyles.orangeDiv} ${recipeCardStyles.cardProductInfos}`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={`${recipeCardStyles.pinkDiv} ${recipeCardStyles.cardProductInfos}`}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default RecipeCardSimple;