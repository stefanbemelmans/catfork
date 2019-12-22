import React from "react";
import { RecipeComponent } from "./RecipeComponent";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
export const RecipeList = () => {
  let recipeList = useSelector(state => state.searchResults);
  console.log(recipeList);
  let results;
  if (!recipeList) {
    console.log("No recipes");
    results = <p>List Will Be here</p>;
  } else {
    results = recipeList.map(recipe => 
      <Col xs={12} sm={4} md={3} key={recipe.id} className="text-center mb-2">
        {/* <RecipeComponent recipe={recipe} /> */}
      </Col>
    );
  }
  return <div className="row">{results}</div>
};

