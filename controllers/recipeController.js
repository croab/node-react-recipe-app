const { update } = require('./../models/recipeModel');
const Recipe = require('./../models/recipeModel');
const ControllerHelper = require('./../utils/controllerHelper');

const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(err => next(err));
  };
};

exports.getAllRecipes = catchAsync(async (req, res) => {
  const queryConstruct = new ControllerHelper(Recipe, req.query)
                          .filter()
                          .sort()
                          .limitFields()
                          .paginate();
  // The query construct will be returned by each method and be available in .query
  const recipes = await queryConstruct.query;
  res.status(200).json({
    status: 'success',
    results: recipes.length,
    data: {
      recipes: recipes
    }
  });
});

exports.getRecipe = catchAsync(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);
  res.status(200).json({
    status: 'success',
    data: {
      recipe: recipe
    }
  });
});

exports.createRecipe = catchAsync(async (req, res) => {
  const newRecipe = await Recipe.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      recipe: newRecipe
    }
  });
});

exports.updateRecipe = catchAsync(async (req, res) => {
  const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );
  res.status(200).json({
    status: 'success',
    data: {
      recipe: updatedRecipe
    }
  });
});

exports.deleteRecipe = catchAsync(async (req, res) => {
  const deletedRecipe = await Recipe.findByIdAndDelete(
    req.params.id
  );
  res.status(200).json({
    status: 'success'
  });
});