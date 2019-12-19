/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualRecipeUrlFactory } from "../constants";

// refactoring for hooks as well as general upkeep.
export const RecipeComponent = (props) => {
  console.log(props, "in recipeComponent")
  const [showDetails, toggleShowDetails ] = useState(false)
  var recipe = props.recipe
      return (
        <div className="recipe" key={recipe.id}>
          {/* <button onClick={()=> getIndRec(props.recipe.id)}> */}
            {" "}{recipe.title}{" "}
          {/* </button> */}
          <img
            className="recPic"
            src={props.recipe.image}
            alt="../images/CatforkTitleSmall.png"
          />
          {/* <RecipeDetails recipe={props.recipe} /> */}
        </div>
      );
    };
  
