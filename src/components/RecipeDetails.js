import React from "react";

export default function RecipeDetails(props) {
  let ings = props.recipe.extendedIngredients.map(ing => {
    return <li>`${ing.orignalString}`</li>
  })
  let method = props.recipe.analyzedInstructions.map(step => {
    <li> "step: " + {step.steps.number} + " " + {step.steps.step}</li>
  })
  return (
    <div>
      <ul>{ings}</ul>

      <ul>{method}</ul>
    </div>

  );
}