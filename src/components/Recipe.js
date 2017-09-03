import React, {Component} from "react";
import RecipeDetails from "./RecipeDetails";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    }
  }

  // ComponentDidMount?? to render the recipeDetails??
    render() {
      let recipe;
      if(this.state.indRec) {
        recipe = this.state.indRec;
        
      }
      return (
        <div className="recipe" key={this.props.rec.id}>
          <button onClick={this.props.getIndRec(this.props.rec.id)}>
            {" "}{this.props.rec.title}{" "}
          </button>
          <img
            className="recPic"
            src={this.props.rec.image}
            alt="../images/CatforkTitleSmall.png"
          />

          <RecipeDetails recipe={recipe} />
          {/* {this.state.instructions[props.rec.id]
            ? this.renderInstructions(this.state.instructions[props.rec.id])
            : ""} */}
        </div>
      );
    };
  }
