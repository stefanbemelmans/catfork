import React from "react";
import { RecipeComponent } from "./RecipeComponent";
import { useDispatch, useSelector } from "react-redux";

export const RecipeList = () => {
  let recipeList = useSelector(state => state.searchResults);
  console.log(recipeList);
  let results;
  if (!recipeList) {
    console.log("No recipes");
    results = <p>List Will Be here</p>;
  } else {
    results = recipeList.map(recipe => (
      <div key={recipe.id} className="col">
        <RecipeComponent recipe={recipe} />
      </div>
    ));
  }
  return <div className="row">{results}</div>;

  //
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
