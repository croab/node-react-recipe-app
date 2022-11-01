import React, { useState } from 'react';

import newRecipeStyles from './../../assets/styles/newRecipeForm.module.css';

function NewRecipeForm() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [serves, setServes] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/api/v1/recipes/", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          image: image,
          preparationTime: preparationTime,
          cookingTime: cookingTime,
          cuisine: cuisine,
          serves: serves
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("Recipe created successfully");
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={newRecipeStyles.recipeForm}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="number"
          value={preparationTime}
          placeholder="Preparation time"
          onChange={(e) => setPreparationTime(e.target.value)}
        />
        <input
          type="number"
          value={cookingTime}
          placeholder="Cooking time"
          onChange={(e) => setCookingTime(e.target.value)}
        />
        <input
          type="text"
          value={cuisine}
          placeholder="Cuisine"
          onChange={(e) => setCuisine(e.target.value)}
        />
        <input
          type="text"
          value={serves}
          placeholder="Serving size"
          onChange={(e) => setServes(e.target.value)}
        />

        <button type="submit">Create Recipe</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default NewRecipeForm;