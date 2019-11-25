import { useDispatch } from "react-redux";
import * as recipeActions from "../recipeActionTypes";
import * as urls from "./constants.js";
import SearchBox from "../components/SearchBox";

const dispatch = useDispatch();

export const fetchRecipes = (searchTerm) => {
  const ingredientsToSearch = searchTerm
  getRecipes(ingredientsToSearch)
   dispatch(recipeActions.FETCH_RECIPES)
  }

const getRecipes = async(searchTerms) => {
  const recipes = await fetch(
    urls.recipeSearchBaseUrl + searchTerms + urls.recipeSearchEndUrl,
    {
      headers: urls.mashapeHeader
    }
  );
   const parsedRecipes = await recipes.json();
   dispatch(recipeActions.SET_RECIPES(parsedRecipes));
}

export default SearchBox;