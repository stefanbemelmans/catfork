import React from "react";

export const RecipeDetails = props => {
  //  losing the extended ingredients, getting the method
  if (!props) {
    return "No Details";
  }

  const recipeDetails = props.recipeDetails;

  var recipeMethod = (recipeDetails.analyzedInstructions[0].steps) ?
      recipeDetails.analyzedInstructions[0].steps.map((step, i) => {
        return (
          <li key={i}>
            step:{step.number} {step.step}
          </li>
        );
      })
      :
      "No instructions found, you are on your own. Good Luck!";


const extendedIngredientList = recipeDetails.extendedIngredients.map(
  (ing, i) => {
    return <li key={i}>{ing.originalString}</li>;
  }
);

return (
  <div className="text-left m-1 p-1">
    <ul>{extendedIngredientList}</ul>
    <ul>{recipeMethod}</ul>
  </div>
);

}