import React, {Component} from "react";
import RecipeDetails from "./RecipeDetails";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    }
  }
    render() {
      if(state.indRec)
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


          {/* {this.state.instructions[props.rec.id]
            ? this.renderInstructions(this.state.instructions[props.rec.id])
            : ""} */}
        </div>
      );
    };
  }
