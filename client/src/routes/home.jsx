import React from "react";
import homeStyles from './home.module.css';
import RecipeList from './../components/recipes/recipeList';
import recipeStyles from './../components/recipes/recipeList.module.css';

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
      <div className={recipeStyles.wrapper}>
        <RecipeList />
      </div>
    </main>
  )
}

export default Home;