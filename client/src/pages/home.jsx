import React from "react";
import homeStyles from './../assets/styles/home.module.css';
import RecipeListTop from './../components/recipes/recipeListTop';

function Home() {
  return (
    <main className={homeStyles.wrapper}>
      <div className={homeStyles.homeWrapper}>
        <div className={homeStyles.homeTextContent}>
          <h1>COOKBOOK!</h1>
          <p>A place for you to explore recipes from local chefs and buy their cookbooks.</p>
          <a className={homeStyles.homeBtn} href="#">See all cookbooks!</a>
        </div>
        <div className={homeStyles.homeImg}></div>
      </div>
      <div className={homeStyles.topRecipeWrapper}>
        <h2>TOP RECIPES</h2>
        <RecipeListTop />
      </div>
    </main>
  )
}

export default Home;