/* eslint-disable no-undef */
/* eslint-disable no-console */
import * as recipeActions from "./recipeActionTypes";

export const fetchRecipes = () => {
  console.log("fetchREcipe Action");
  return {
    type: recipeActions.FETCH_RECIPES
  };
};

export const setRecipes = recipes => {
  console.log("SetREcipes action", "recipes: ", recipes);
  return {
    type: recipeActions.SET_RECIPES,
    searchResults: recipes
  };
};

export const setSearchTerms = searchTerms => {
  console.log("setSearchTerms action", "recipes: ", searchTerms);
  return {
    type: recipeActions.SET_SEARCH_TERMS,
    searchTerms
  };
};

export const setRecipeDetails = recipe => {
  console.log("getting recipe Details", recipe);
  return {
    type: recipeActions.SET_RECIPE_DETAILS,
    recipeDetails: recipe
  };
};
