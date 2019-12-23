import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
export const RecipeDetails = props => {
  //  losing the extended ingredients, getting the method
  if (!props) {
    return "No Details";
  }

  const recipeDetails = props.recipeDetails;
  const method = recipeDetails.analyzedInstructions[0].steps.map((step, i) => {
    return (
      <li key={i}>
        step:{step.number} {step.step}
      </li>
    );
  });

  const extendedIngredientList = recipeDetails.extendedIngredients.map(
    (ing, i) => {
      return <li key={i}>{ing.originalString}</li>;
    }
  );

  return (
    <div className="text-left m-1 p-1">
      <ul>{extendedIngredientList}</ul>
      <ul>{method}</ul>
    </div>
  );
};
