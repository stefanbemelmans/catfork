import React from "react";

export default function RecipeDetails(props) {
 
  let ings = props.recipe.extendedIngredients.map((ing, i) => {
    return <li key={i}>`${ing.orignalString}`</li>
  });
  
  let method = props.recipe.analyzedInstructions.map((step,i) => {
    <li key={i}> "step: " + {step.steps.number} + " " + {step.steps.step}</li>
  });
  
  return (
    <div>
      <ul>{ings}</ul>

      <ul>{method}</ul>
    </div>

  );

}