const FETCH_RECIPES = "FETCH_RECIPES";
const SET_RECIPES = "SET_RECIPES";
const GET_INDIVIDUAL_RECIPE = "GET_INDIVIDUAL_RECIPE";
const RECIPE_SEARCH_ERROR = "RECIPE_SEARCH_ERROR";

const initialState = {
  loading: false,
  isLoaded: false,
  searchResults: [],
  selectedRecipe: {},
  error: {}
};

export const RecipeReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES:
      return {
        ...state,
        loading: true
      };
    case SET_RECIPES:
      return {
        ...state,
        loading: false,
        isLoaded: true,
        searchResults: action.searchResults
      };
    case GET_INDIVIDUAL_RECIPE:
      return {
        ...state,
        selectedRecipe: action.selectedRecipe
      };
    case RECIPE_SEARCH_ERROR:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
