import React, {Component} from "react";
import RecipeDetails from "./RecipeDetails";

export default class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      recipe: this.props.recipe

    }
    // this.getIndRec = this.props.getIndRec.bind(this);
  }
  // componentDidMount(){
    
  //   this.setState = {
  //     recipe: this.props.recipe,  
  //     show: true
  //     }
  //   }
  isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  


  // ComponentDidMount?? to render the recipeDetails??
    render() {
      let details =
      this.props.recipe.id === this.props.rec.id ?
         <RecipeDetails recipe={this.props.recipe} /> : "";
     
      return (
        <div className="recipe" key={this.props.rec.id}>
          <button onClick={()=>this.props.getIndRec(this.props.rec.id)}>
            {" "}{this.props.rec.title}{" "}
          </button>
          <img
            className="recPic"
            src={this.props.rec.image}
            alt="../images/CatforkTitleSmall.png"
          />

          {details}
          
        </div>
      );
    };
  }
