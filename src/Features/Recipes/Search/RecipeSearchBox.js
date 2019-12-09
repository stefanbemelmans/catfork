/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch } from "react-redux";
import {recipeSearchUrlFactory, mashapeHeader} from "../constants.js";

export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const [numOfRecipes, setNumOfRecipes] = useState(10);
  const GetRecipes = async (ingredients, numofRec) => {
    console.log("ingredients from searchInput: ", ingredients);
    // These are async actions and they happen quickly So I decided to set flags anyway
    dispatch({ type: recipeActions.FETCH_RECIPES });
    var searchString = recipeSearchUrlFactory(ingredients, numofRec);
    console.log("searchstring:", searchString);
    const recipes = await fetch(searchString, {
      headers: mashapeHeader
    });
    const parsedRecipes = await recipes.json();
    console.log("parsed Recipe:", parsedRecipes);
    dispatch({type:recipeActions.SET_RECIPES, searchResults: parsedRecipes});
  };
  return (
    <div id="search" className="search">
      <div style={{flexDirection: "row"}}>

      <input
        className="searchInput"
        type="number"
        placeholder="10"
        onChange={e => setNumOfRecipes(e.target.value)}
        />
      <input
        className="searchInput ingredientInput" 
        type="text"
        placeholder="Enter comma separated ingredients..."
        onChange={e => setSearchTerms(e.target.value)}
        />
      {/* TODO: add searchTerm validation */}
      </div>
      <button
        type="submit"
        title="Search"
        onClick={() => GetRecipes(searchTerms, numOfRecipes)}
      >
        Search!
      </button>
    </div>
  );
};
export default RecipeSearchBox;
