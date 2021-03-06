import React from "react";
import { RecipeComponent } from "./RecipeComponent";
import { useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const RecipeList = () => {
  // let recipeList = useSelector(state => state.searchResults);
  // var recipeList = props.recipeList;
  let recipeListFromState = useSelector(state => state.searchResults);
  console.log(recipeListFromState, "recipe list");
  var results;
  
  results = recipeListFromState ? recipeListFromState.map(recipe =>
    <Col key={recipe.id} xsoffset={1} xs={10} sm={6}  md={4} lg={3} className="text-center mb-2">
      <RecipeComponent recipe={recipe} />
    </Col>
  )
  :
  "No Recipes Yet";
  return(
      <Row>
        {results}
      </Row>
      ) 
}
// };

