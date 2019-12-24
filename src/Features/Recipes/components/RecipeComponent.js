/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { RecipeDetails } from "./RecipeDetails";
// import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetailsUrlFactory, mashapeHeader } from "../constants";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import * as recipeActions from "../recipeActionTypes";

// refactoring for hooks as well as general upkeep.
export const RecipeComponent = props => {
  // const dispatch = useDispatch();
  const [showDetails, toggleShowDetails] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  var recipe = props.recipe;

  const toggleRecipeDetails = () => {
    toggleShowDetails(!showDetails);
  };

  const fetchRecipeDetails = async id => {
    if (!recipeDetails) {
      // Get the search string from the factory
      var RecipeDetailsSearchString = getRecipeDetailsUrlFactory(id);
      // Get the details
      var recipeDetails = await fetch(RecipeDetailsSearchString, {
        headers: mashapeHeader
      });
      // Parse the details out of the Promise
      const parsedRecipeDetails = await recipeDetails.json();
      console.log(parsedRecipeDetails, "should be object not promise");
      // setting local state
      setRecipeDetails(parsedRecipeDetails);
    }
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>Used Ingredients: {recipe.usedIngredients.length}</Card.Text>
        <Card.Text>
          Missing Ingredients: {recipe.missedIngredientCount}
        </Card.Text>
        <Card.Text>Likes: {recipe.likes}</Card.Text>

        {!recipeDetails ? (
          <Button
            variant="outline-primary"
            onClick={() => fetchRecipeDetails(recipe.id)}
          >
            Get Recipe Details
          </Button>
        ) : (
          <Button
            variant="outline-primary"
            onClick={() => toggleRecipeDetails()}
          >
           {showDetails ? "Hide " : "Show "}Recipe Details
          </Button>
        )}
        {showDetails && recipeDetails && (
          <RecipeDetails
            recipeDetails={recipeDetails}
            toggleDetails={toggleRecipeDetails}
          />
        )}
      </Card.Body>
    </Card>
  );
};
