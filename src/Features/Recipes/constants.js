/* eslint-disable no-undef */
const dotenv = require("dotenv");
dotenv.config();

// Broke the URL's into pieces to easier insert the url vars. 

const getRecipeDetailsBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
const getRecipeDetailsEndUrl = "/information?includeNutrition=false";

const recipeSearchBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
const recipeSearchMidUrl = "&limitLicense=false&number=" 
const recipeSearchEndUrl = "&ranking=1";

export const mashapeHeader = {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
}

// process.env.MASHAPE_KEY

// "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"}

// process.env.MASHAPE_KEY}

// 

// Helper functions to return the search strings
export const recipeSearchUrlFactory = (ingredientString, numOfRecipes) => recipeSearchBaseUrl + ingredientString + recipeSearchMidUrl + numOfRecipes + recipeSearchEndUrl
export const getRecipeDetailsUrlFactory = (recipeId) => getRecipeDetailsBaseUrl + recipeId + getRecipeDetailsEndUrl