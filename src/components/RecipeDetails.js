import React from "react";

export default function RecipeDetails(props) {
 
  let ings = props.recipe.extendedIngredients.map((ing, i) => {
    return (
    
      <li key={i}>`${ing.originalString}`</li>
    );
  });
  
  let method = props.recipe.analyzedInstructions.map((step,i) => {
    return(
    <li key={i}> "step: " + {step.steps.number} + " " + {step.steps.step}</li>
    );
  });
  
  return (
    <div className="recipe">
      <ul>{ings}</ul>
      <div className="recipeIns">
        <ul>{method}</ul>
      </div>
    </div>

  );

}