/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useState } from "react";
import * as recipeActions from "../recipeActionTypes";
import { useDispatch } from "react-redux";
import { recipeSearchUrlFactory } from "../constants.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
// const ingredientSearchUrl = "https://servercat.herokuapp.com/api/recipeSearch"
const ingredientSearchBaseUrl = "http://localhost:5000/api/recipeSearch/?ingredients="
export const RecipeSearchBox = () => {
  const dispatch = useDispatch();
  let recipeList = useSelector(state => state.numOfRecipes);
  const [searchTerms, setSearchTerms] = useState("peppers, onions");
  const [numOfRecipes, setNumOfRecipes] = useState(10);
  var numberOfRecipesEndUrl = "&numOfRecipes=";
  // const separator = "%252C";

  const GetRecipes = async (ingredients) => {
    var cleanedIngredientArray = ingredients
      .split(",")
      .map(x => x.trim());

    console.log(ingredients, "param");
    console.log(cleanedIngredientArray);
    var cleanedIngredientString = cleanedIngredientArray.toString();
    var numOfRecipes = useState(state => state.numOfRecipes);
    var recipeSearchString = ingredientSearchBaseUrl + cleanedIngredientString + numberOfRecipesEndUrl + numOfRecipes;
    console.log(recipeSearchString, "should be url with ingredients and number");
    dispatch({
      type: recipeActions.SET_SEARCH_TERMS,
      searchTerms: cleanedIngredientString
    });
    dispatch({
      type: recipeActions.FETCH_RECIPES
    });

    
    var recipes = await fetch(ingredientSearchBaseUrl + cleanedIngredientString);
    var parsedRecipes = await recipes.json();
    // if (recipes.body != null) {
      console.log(parsedRecipes);
      // var parsedRecipes = recipes.body.json();
      console.log(recipes, "recipes back from server, woohoo!");
      dispatch({
        type: recipeActions.SET_RECIPES,
        searchResults: parsedRecipes
      });
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
          <div className="w-100 text-center">
            <button
              type="submit"
              title="Search"
              onClick={() => GetRecipes(searchTerms, numOfRecipes)}
            >
              Search!
            </button>
            <button
              type="reset"
              title="Clear Results"
              // TODO: finish clear search results action
              onClick={() => dispatch({ type: recipeActions.CLEAR_SEARCH })}
            >Clear Results</button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
