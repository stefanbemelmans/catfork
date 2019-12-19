/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch } from "react-redux";
import { recipeSearchUrlFactory, mashapeHeader } from "../constants.js";

// TODO: get search terms in redux state to display to the user
export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const [numOfRecipes, setNumOfRecipes] = useState(10);

  const GetRecipes = async (ingredients, numofRec) => {
    console.log("ingredients from searchInput: ", ingredients);

    var cleanedIngredientString = ingredients
      .split(",")
      .map(x => x.trim())
      .toString();
    console.log(cleanedIngredientString, "cleaned ingredients");
    // These are async actions and they happen quickly So I decided to set flags anyway
    dispatch({ type: recipeActions.FETCH_RECIPES });
    var searchString = recipeSearchUrlFactory(
      cleanedIngredientString,
      numofRec
    );
    console.log("searchstring:", searchString);
    const recipes = await fetch(searchString, {
      headers: mashapeHeader
    });
    const parsedRecipes = await recipes.json();
    console.log("parsed Recipe:", parsedRecipes);
    dispatch({ type: recipeActions.SET_RECIPES, searchResults: parsedRecipes });
  };
  return (
    <div id="search" className="search">
      <div className="searchComponent">
        <h3>Number Of Recipes</h3>
        <input
          className="searchInput"
          type="number"
          placeholder="10"
          onChange={e => setNumOfRecipes(e.target.value)}
        />
      </div>
      <div className="searchComponent">
        <h3>Enter Ingredients</h3>
        <h6>Separated By A Comma</h6>
        <input
          className="searchInput ingredientInput"
          type="text"
          placeholder="chicken, peppers, garlic"
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

