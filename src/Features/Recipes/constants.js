/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

// Broke the URL's into pieces to easier insert the url vars. 

const getRecipeDetailsBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
const getRecipeDetailsEndUrl = "/information?includeNutrition=false";

const recipeSearchBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=";
// const recipeSearchMidUrl = "&ranking=1&ignorePantry=true&ingredients=" 

  

export const recipeSearchUrlFactory = (ingredientString) => recipeSearchBaseUrl + ingredientString;
export const getRecipeDetailsUrlFactory = (recipeId) => getRecipeDetailsBaseUrl + recipeId + getRecipeDetailsEndUrl;




