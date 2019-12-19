/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { RecipeDetails } from "./RecipeDetails";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualRecipeUrlFactory } from "../constants";

// refactoring for hooks as well as general miain
export const RecipeComponent = (props) => {

  const [showDetails, toggleShowDetails ] = useState(false)

      return (
        <div className="recipe" key={this.props.recipe.id}>
          <button onClick={()=>this.props.getIndRec(props.recipe.id)}>
            {" "}{props.recipe.title}{" "}
          </button>
          <img
            className="recPic"
            src={props.recipe.image}
            alt="../images/CatforkTitleSmall.png"
          />
          <RecipeDetails recipe={props.recipe} />
        </div>
      );
    };
  
