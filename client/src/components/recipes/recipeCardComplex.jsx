import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import recipeCardStyles from './../../assets/styles/recipeCardComplex.module.css'
import StarList from '../ratings/starsList';
import Chef from '../chefs/chefInfo';

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
     serves,
     difficulty,
     ratingsAverage,
     contributingChefs
  } = props.cardData;

  return (
    <Link className={recipeCardStyles.links} to={`/recipes/${props.id}`}>
      <div className={recipeCardStyles.cardProduct}>
        <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
        <div className={recipeCardStyles.cardSections}>
          <div className={`${recipeCardStyles.cardProductInfos} ${recipeCardStyles.greenDiv}`}>
            <h2>{title}</h2>
            <p>{cuisine}</p>
            <p>{description}</p>
            <StarList ratingsAverage = {ratingsAverage} />
          </div>
          <div className={`${recipeCardStyles.orangeDiv} ${recipeCardStyles.cardProductInfos}`}>
            <p>Prep time 🔪: {preparationTime}</p>
            <p>Cooking time 🥘: {cookingTime}</p>
            <p>Difficulty 😬: {difficulty}</p>
            <p>Serves 🧍: {serves}</p>
            <p>Dietary: {dietary}</p>
          </div>
          <div className={`${recipeCardStyles.pinkDiv} ${recipeCardStyles.cardProductInfos}`}>
            <h2>Contributing Chefs</h2>
            <p>{contributingChefs.map(chef => <Chef chef={chef}/>)}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCardSimple;