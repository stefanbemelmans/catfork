import React, {Component} from "react";

import Recipe from "../../../containers/RecipeContainer";

export const RecipeList = (props) =>  {
  let recipes;
  if (props.recipes) {
    recipes = props.recipes.map(function (rec, i) {
      if (i < 5) {
        return (
          <Recipe key={rec.id} rec={rec} />
        );  
      } 
      return (<div key={rec.id} />);
    }); 
  } 
  
  return (
    <div 
      className="">
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {recipes}
        </div>
      </div>
    </div>
  );
}
export default RecipeList;

// getIndRec(id) {
//   //let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information?includeNutrition=false";
//   let recBaseUrl =
//     "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
//   let recId = id;
//   let recEndUrl = "/information?includeNutrition=false";

//   fetch(recBaseUrl + recId + recEndUrl, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
//     }
//   }).then(response => {
//     console.log(response);
//     return response.json().then(data => {
//       var recIng = data.extendedIngredients.map(ing => ing.originalString);
//       var instructions = data.instructions;
//       this.setState({
//         instructions: {
//           ...this.state.instructions,
//           [id]: { recIng, instructions }
//         }
//       });
//       console.log(data);
//     });
//   });
// }