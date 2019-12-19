import React from "react";
import { RecipeComponent } from "./RecipeComponent";
import { useDispatch, useSelector } from "react-redux";

export const RecipeList = props => {
  let recipeList = useSelector(state => state.searchResults);
  console.log(recipeList);


  return (<p>List Will Be here</p>);
  // if (!recipeList) {
  //   console.log("No recipes");
  //   return(
  //   <p>No Recipes Yet</p>
  //   );
  // } else {
  //   let recipeArray = recipeList.map(recipe => {
  //     <RecipeComponent key={recipe.id} recipe={recipe} />;
  //   });
  //   return recipeArray;
  // }

  // recipeList = recipeList
  //   ? recipeList.map(recipe => {
  //       <RecipeComponent key={recipe.id} recipe={recipe} />;
  //     })
  //   : "No Recipes Yet";

  // return recipeList;
};
