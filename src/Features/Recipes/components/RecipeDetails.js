import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
export const RecipeDetails = props => {
  const recipeDetails = useSelector(state => state.recipeDetails);
  let ingredientList = "No Details";
  let method = props.recipeDetails.analyzedInstructions[0].steps.map((step, i) => {
      return (
        <li key={i}>
          step:{step.number} {step.step}
        </li>
      );
    });
  return (
    <div>
      {/* rethink the structure and state management of RecipeList => Recipe Details */}
      <Button variant="outline-primary" onClick={() => props.toggleDetails()} />
      {recipeDetails
        ? (ingredientList = recipeDetails.extendedIngredients.map((ing, i) => {
            return (
              <div key={i} className="d-flex p-1 flex-column w-auto clear-fix">
                <ul>
                  <li>{ing.originalString}</li>
                </ul>
              </div>
            );
          }))
        : ingredientList}
    </div>
  );
};
// let method = props.recipe.analyzedInstructions[0].steps.map((step, i) => {
//   return (
//     <li key={i}>
//       step:{step.number} {step.step}
//     </li>
//   );
// });

//   return (
//     <div className="recipeIns">
//       <ul>{ings}</ul>
//       <div>
//         <ul>{method}</ul>
//       </div>
//     </div>
//   );
// };
