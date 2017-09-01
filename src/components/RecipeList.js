import React, {Component} from "react";

import React from "react";
import Recipe from "./Recipe";

function TitleList(props) {
  let titles = "";
  if (props.movies) {
    titles = props.movies.map(function (title, i) {
      if (i < 5) {
        return (
          <Item key={title.id} movie={title} />
        );  
      } 
      return (<div key={title.id} />);
    }); 
  } 
  
  return (
    <div 
      className="TitleList" 
      data-loaded={props.movies && props.movies.length > 0}>
      <div className="Title">
        <h1>{props.title}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}
export default TitleList;

getIndRec(id) {
  //let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information?includeNutrition=false";
  let recBaseUrl =
    "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
  let recId = id;
  let recEndUrl = "/information?includeNutrition=false";

  fetch(recBaseUrl + recId + recEndUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
    }
  }).then(response => {
    console.log(response);
    return response.json().then(data => {
      var recIng = data.extendedIngredients.map(ing => ing.originalString);
      var instructions = data.instructions;
      this.setState({
        instructions: {
          ...this.state.instructions,
          [id]: { recIng, instructions }
        }
      });
      console.log(data);
    });
  });
}