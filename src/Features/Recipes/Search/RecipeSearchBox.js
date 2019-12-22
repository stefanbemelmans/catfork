/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch } from "react-redux";
import { recipeSearchUrlFactory, mashapeHeader } from "../constants.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  const [searchTerms, setSearchTerms] = useState("");
  const [numOfRecipes, setNumOfRecipes] = useState(10);

  const GetRecipes = async (ingredients, numberOfRecipes) => {
    var cleanedIngredientString = ingredients
      .split(",")
      .map(x => x.trim())
      .toString();

    // Setting search ingredients after cleaning
    // TODO: add searchTerm validation 
    
    dispatch({
      type: recipeActions.SET_SEARCH_TERMS,
      searchTerms: cleanedIngredientString
    });
    // Sets the flag in state that recipe fetch has started
    dispatch({
      type: recipeActions.FETCH_RECIPES
    });

    var searchString = recipeSearchUrlFactory(
      cleanedIngredientString,
      numberOfRecipes
    );

    const recipes = await fetch(searchString, {
      headers: mashapeHeader
    });
    const parsedRecipes = await recipes.json();
    // sets recipes in redux
    dispatch({
      type: recipeActions.SET_RECIPES,
      searchResults: parsedRecipes
    });
  };
  return (
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
          </div>
        </Col>
        <Col sm={4} xs={12} className="mb-2">
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
  );
};
