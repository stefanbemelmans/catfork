/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeDetailsUrlFactory, mashapeHeader } from "../constants";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import * as recipeActions from "../recipeActionTypes";

// refactoring for hooks as well as general upkeep.
export const RecipeComponent = props => {
  const dispatch = useDispatch();
  const [showDetails, toggleShowDetails] = useState(false);
  console.log(props, "in recipeComponent");

  var recipe = props.recipe;

  const fetchRecipeDetails = async id => {
    // Get the search string from the factory
    var RecipeDetailsSearchString = getRecipeDetailsUrlFactory(id);
    // Get the details
    var recipeDetails =  await fetch(RecipeDetailsSearchString, {
      headers: mashapeHeader
    });
    // Parse the details out of the Promise 
    const parsedRecipeDetails = await recipeDetails.json();

    console.log(parsedRecipeDetails, "in fetch, should be object not promise")
    dispatch({
      type: recipeActions.SET_RECIPE_DETAILS,
      recipeDetails: parsedRecipeDetails
    });
  };

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          Used Ingredients: {recipe.usedIngredient}
          Missing Ingredients: {recipe.missedIngredientCount}
        </Card.Text>
        <Card.Text>Likes: {recipe.likes}</Card.Text>
        <Button
          variant="outline-primary"
          onClick={() => fetchRecipeDetails(recipe.id)}
        >
          Get Recipe Details
        </Button>
        {/* <Card.Subtitle className="mb-2 text-muted">By: {recipe.sourceName}</Card.Subtitle>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the cards content.
      </Card.Text> */}
        {/* <Card.Link href={recipe.sourceUrl} targe="blank">
          Original Source: {recipe.sourceName}
          </Card.Link>
          <Card.Link href={recipe.spoonacularSourceUrl}>
          Spoonacular Content
        </Card.Link> */}
      </Card.Body>
    </Card>
  );
};


