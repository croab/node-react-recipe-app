import React from 'react';

function RecipeCardShow(props) {
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
  } = props.data;

  return (
    <div>
      <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
      <h1>{title}</h1>
    </div>
  )
}

export default RecipeCardShow;