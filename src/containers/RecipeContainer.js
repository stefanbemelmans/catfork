/* eslint-disable no-undef */
import React from "react";
import { useDispatch } from "react-redux";
import * as recipeActions from "../Features/Recipes/recipeActionTypes";
import Recipe from "../components/Recipe";
import {getIndividualRecipeUrlFactory, mashapeHeader} from "../Features/Recipes/constants"

export const GetIndividualRecipe = async (id) => {
  const dispatch = useDispatch();
    let recipe = fetch(getIndividualRecipeUrlFactory(id), {
      headers: mashapeHeader
    })

    let parsedRecipe = recipe.json();
    return(
    dispatch(recipeActions.SET_INDIVIDUAL_RECIPE(parsedRecipe))
    )
  }
export default Recipe;

