import {combineReducers} from "redux";

function searchResults(state = [], action) {
  if (action.type === "SEARCH_RESULTS_LOADED") {
    return action.value;
  }
  return state;
}

// function getRecipe(state = [...state], action) {
//   if (action.type === "GET_RECIPE") {
//     return action.value;
//   }
// }

function renderRecipe(state = {}, action) {
  if (action.type === "RENDER_RECIPE") {
    return action.value;
  }
  return state;
}
// function myMovieList(state = [], action) {
//   if (action.type === "MY_MOVIE_LIST_LOADED") {
//     return action.value;
//   }
//   return state;
// }


// function loadMyMovieList(state = [], action) {
//   if (action.type === "LOAD_MY_MOVIE_LIST") {
//     return state;
//   }
// }
const rootReducer = combineReducers({searchResults, renderRecipe});
export default rootReducer;
