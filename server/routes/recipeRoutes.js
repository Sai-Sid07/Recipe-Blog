const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');

//Application Routes
router.get("/", recipeController.homepage);
router.get("/categories", recipeController.exploreCategories);
router.get("/categories/:name", recipeController.exploreCategoriesSpecific);
router.get("/recipe/:id", recipeController.exploreRecipe);
router.post("/search", recipeController.searchRecipe)

module.exports = router;