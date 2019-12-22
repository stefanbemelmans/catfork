/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch } from "react-redux";
import { recipeSearchUrlFactory, mashapeHeader } from "../constants.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// TODO: display search terms to the user
export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const [numOfRecipes, setNumOfRecipes] = useState(10);

  const GetRecipes = async (ingredients, numofRec) => {
    var cleanedIngredientString = ingredients
      .split(",")
      .map(x => x.trim())
      .toString();
    // Setting search ingredients after cleaning
    dispatch({
      type: recipeActions.SET_SEARCH_TERMS,
      searchTerms: cleanedIngredientString
    });
    // These are async actions and they happen quickly So I decided to set flags anyway
    dispatch({
      type: recipeActions.FETCH_RECIPES
    });

    var searchString = recipeSearchUrlFactory(
      cleanedIngredientString,
      numofRec
    );

    const recipes = await fetch(searchString, {
      headers: mashapeHeader
    });
    const parsedRecipes = await recipes.json();
    dispatch({
      type: recipeActions.SET_RECIPES,
      searchResults: parsedRecipes
    });
  };
  return (
    // Trying bootstrap grid...it's only 2 components, breakpoints will do I think.

    <Container>
      <Row>
        <Col xs={12} sm={4}>
          <div className="searchComponent m-2 p-2">
            <h3 className="inputLabel">Number Of Recipes</h3>
            <input
              id="numOfRecipeInput"
              className="searchInput"
              type="number"
              placeholder="10"
              onChange={e => setNumOfRecipes(e.target.value)}
            />
          </div>
        </Col>
        <Col sm={4} xs={12}>
          <div className="searchComponent m-2 p-2">
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
        </Col>
        <Col sm={4} xs={12}>
          <div className="w-100 text-center">
            <button
              type="submit"
              title="Search"
              onClick={() => GetRecipes(searchTerms, numOfRecipes)}
            >
              Search!
            </button>
          </div>
        </Col>
      </Row>
    </Container>
    // <div id="search" className="search">
    //   <div className="searchComponent">
    //     <h3>Number Of Recipes</h3>
    //     <input
    //       className="searchInput"
    //       type="number"
    //       placeholder="10"
    //       onChange={e => setNumOfRecipes(e.target.value)}
    //     />
    //   </div>
    //   <div className="searchComponent">
    //     <h3>Enter Ingredients</h3>
    //     <h6>Separated By A Comma</h6>
    //     <input
    //       className="searchInput ingredientInput"
    //       type="text"
    //       placeholder="chicken, peppers, garlic"
    //       onChange={e => setSearchTerms(e.target.value)}
    //     />
    //     {/* TODO: add searchTerm validation */}
    //   </div>
    //   <button
    //     type="submit"
    //     title="Search"
    //     onClick={() => GetRecipes(searchTerms, numOfRecipes)}
    //   >
    //     Search!
    //   </button>
    // </div>
  );
};
