import React, {Component} from "react";
import RecipeDetails from "./RecipeDetails";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    }
  }
componentDidMount(){
  let recipe;
  if(this.state.indRec) {
    renderInstructions(state.indRec);
    this.setState = {
      show: true
    }
  }

}
  // ComponentDidMount?? to render the recipeDetails??
    render() {
     
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

          <RecipeDetails style="display:{show};" recipe={recipe} />
          {/* {this.state.instructions[props.rec.id]
            ? this.renderInstructions(this.state.instructions[props.rec.id])
            : ""} */}
        </div>
      );
    };
  }
