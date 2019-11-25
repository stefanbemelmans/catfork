import React from "react";
import { useDispatch } from "react-redux";
import * as recipeActions from "../recipeActionTypes";
import Recipe from "../components/Recipe";
import * as urls from "../Features/Recipes/constants"
const dispatch = useDispatch();

export const getIndividualRecipe = async (id) => {
    let recipe = fetch(urls.recipeSearchBaseUrl + id + urls.recipeSearchEndUrl, {
      headers: urls.mashapeHeader
    })

    let parsedRecipe = recipe.json();
    return(
    dispatch(recipeActions.SET_INDIVIDUAL_RECIPE(parsedRecipe))
    )
  }
export default Recipe;

