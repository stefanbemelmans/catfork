import React from 'react'
import { useDispatch } from "react-redux";
import * as recipeActions from "../recipeActionTypes";
import * as urls from "../constants.js";
import SearchBox from "./SearchBox";

export const FetchRecipes = (searchTerm) => {
  const dispatch = useDispatch();
  const ingredientsToSearch = searchTerm
  dispatch(recipeActions.FETCH_RECIPES)
  return  GetRecipes(ingredientsToSearch)
  }

const GetRecipes = async(searchTerms) => {
  const dispatch = useDispatch();
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