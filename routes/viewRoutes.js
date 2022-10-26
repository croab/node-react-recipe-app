const express = require('express');
const viewsController = require('./../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.home);
router.get('/recipes', viewsController.getAllRecipes);
router.get('/recipe', viewsController.getRecipe);

module.exports = router;