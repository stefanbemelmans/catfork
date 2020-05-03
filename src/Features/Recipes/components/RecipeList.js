import React from "react";
import { RecipeComponent } from "./RecipeComponent";
import { useDispatch, useSelector } from "react-redux";
import Col from "react-bootstrap/Col";


export const RecipeList = (props) => {
  // let recipeList = useSelector(state => state.searchResults);
  var recipeList = props.recipeList;
  console.log(recipeList, "recipe list");
  var results;
  results = recipeList.map(recipe =>
    <Col xs={12} sm={4}  md={3} Pkey={recipe.id} className="text-center mb-2">
      <RecipeComponent recipe={recipe} />
    </Col>
  );
  return results;
}
// };

