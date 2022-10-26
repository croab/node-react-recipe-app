const Recipe = require('./../models/recipeModel');
const catchAsync = require('./../utils/catchAsync');

exports.home = (req, res) => {
  res.status(200).render('home', {
    title: 'Home page'
  });
};

exports.getAllRecipes = catchAsync(async (req, res) => {
  const recipes = await Recipe.find();
  console.log(recipes);
  res.status(200).render('recipes', {
    title: 'Home Page',
    recipes: recipes
  });
});

exports.getRecipe = (req, res) => {
  res.status(200).render('recipe', {
    title: 'Chocolate cake'
  });
};