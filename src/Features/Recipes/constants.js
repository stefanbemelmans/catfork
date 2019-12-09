

// TODO: come up with a better naming convention. You search FOR recipes with ingredients
//  then with a recipe you get an Individual recipe. This might do.
const getIndividualRecipeBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
const getIndividualRecipeEndUrl = "/information?includeNutrition=false";

const recipeSearchBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
const recipeSearchMidUrl = "&limitLicense=false&number=" 
const recipeSearchEndUrl = "&ranking=1";
export const mashapeHeader = {"X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"}

export const recipeSearchUrlFactory = (ingredientString, numOfRecipes) => recipeSearchBaseUrl + ingredientString + recipeSearchMidUrl + numOfRecipes + recipeSearchEndUrl
export const getIndividualRecipeUrlFactory = (recipeId) => getIndividualRecipeBaseUrl + recipeId + getIndividualRecipeEndUrl