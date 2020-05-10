/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch, useSelector } from "react-redux";
import { recipeSearchUrlFactory } from "../constants.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {RecipeList} from "../components/RecipeList";
const ingredientSearchUrl = "https://servercat.herokuapp.com/api/recipeSearch/?ingredients=";
// const ingredientSearchBaseUrl = "http://localhost:5000/api/recipeSearch/?ingredients="

export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  // let recipeList = useSelector(state => state.searchResults);
  const [searchTerms, setSearchTerms] = useState("peppers, onions");

  var numOfRecipes = 10;

  const setNumOfRecipes = (number) => numOfRecipes = number;

  const GetRecipes = async (ingredients) => {
    var cleanedIngredientArray = ingredients
      .split(",")
      .map(x => x.trim());

    console.log(ingredients, "param");
    console.log(cleanedIngredientArray);
    var cleanedIngredientString = cleanedIngredientArray.toString();
// When sending it to heroku I may be able to send it as an array
    
    dispatch({
      type: recipeActions.SET_SEARCH_TERMS,
      searchTerms: cleanedIngredientString
    });
    dispatch({
      type: recipeActions.FETCH_RECIPES
    });

    try {
      var recipes = await fetch(ingredientSearchUrl + cleanedIngredientString);
      var parsedRecipes = await recipes.json();
      console.log(parsedRecipes, "recipes back from server, woohoo!");
      dispatch({
        type: recipeActions.SET_RECIPES,
        searchResults: parsedRecipes
      });
    } catch (error) {
      console.log("Error: ", error)
    }
  }

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
              value={searchTerms}
              onFocus={() => setSearchTerms("")}
              onChange={e => setSearchTerms(e.target.value)}
            />
          </div>
        </Col>
        <Col sm={4} xs={12} className="mb-2">
          <div style={{height:"10rem"}} className="d-flex flex-column h-100 w-100 text-center justify-content-between">
            <div className="bg-primary d-flex m-2 h-50 justify-content-center align-items-center"
              onClick={() => GetRecipes(searchTerms, numOfRecipes)}
            >
              Search!
            </div>
            <div className="bg-info"
              onClick={() => dispatch({ type: recipeActions.CLEAR_SEARCH })}
            >Clear Results</div>
          </div>
        </Col>
      </Row>
      <RecipeList />
    </Container>
  );
}
