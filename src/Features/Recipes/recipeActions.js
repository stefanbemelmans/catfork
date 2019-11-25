import * as recipeActions from "./recipeActionTypes"

export const fetchRecipes = () => {
   return{
   type: recipeActions.FETCH_RECIPES,
   }
} 

export const setRecipes = (recipes) => {
  return {
    type: recipeActions.SET_RECIPES,
    searchResults: recipes
  };
}

export const getIndividualRecipe = (recipe) => {
  return {
    type: recipeActions.GET_INDIVIDUAL_RECIPE,
    selectedRecipe: recipe
  };
}