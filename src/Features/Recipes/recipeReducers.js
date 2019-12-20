import * as actionType from "./recipeActionTypes";

const initialState = {
  loading: false,
  isLoaded: false,
  searchResults: [],
  recipeDetails: {},
  searchTerms: "",
  error: {}
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_RECIPES:
      return {
        ...state,
        loading: true
      };
    case actionType.SET_RECIPES:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        searchResults: action.searchResults
      };
    case actionType.SET_SEARCH_TERMS:
      return {
        ...state,
        searchTerms: action.searchTerms
      };
    case actionType.SET_RECIPE_DETAILS:
      return {
        ...state,
        recipeDetails: action.recipeDetails
      };
    case actionType.RECIPE_SEARCH_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default recipes;
