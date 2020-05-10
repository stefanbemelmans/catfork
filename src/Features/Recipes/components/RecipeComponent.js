/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { RecipeDetails } from "./RecipeDetails";
// import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import recipeDetailUrlBuilder from "../constants"
export const RecipeComponent = props => {
  console.log("Recipe Component");
  const [showDetails, toggleShowDetails] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null);
  let recipe = props.recipe;

  const toggleRecipeDetails = () => {
    toggleShowDetails(!showDetails);
  };

  const fetchRecipeDetails = async id => {
    if (!recipeDetails) {
      var freshRecipeDetails = await fetch(recipeDetailUrlBuilder(id));
      var parsedRecipeDetails = await freshRecipeDetails.json();
      console.log(parsedRecipeDetails, "should be object not promise");
      setRecipeDetails(parsedRecipeDetails);
    }
  }

  return (
    recipe != null ?
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={recipe.image} />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>Used Ingredients: {recipe.usedIngredients.length}</Card.Text>
        <Card.Text>
          Missing Ingredients: {recipe.missedIngredientCount}
        </Card.Text>
        <Card.Text className="mb-2">Likes: {recipe.likes}</Card.Text>

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
    </Card> :
    "nothing to see here"
  );
}
