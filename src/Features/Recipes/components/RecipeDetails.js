// import React from "react";

// export const RecipeDetails = (props) => {
 
//   let ings = props.recipe.extendedIngredients.map((ing, i) => {
//     return (
    
//       <li key={i}>`${ing.originalString}`</li>
//     );
//   })
  
//   let method = props.recipe.analyzedInstructions[0].steps.map((step,i) => {
//     return(
//     <li key={i}>step:{step.number}  {step.step}</li>
//     );
//   });
  
//   return (
//     <div className="recipeIns">
//       <ul>{ings}</ul>
//       <div>
//         <ul>{method}</ul>
//       </div>
//     </div>

//   );

// }