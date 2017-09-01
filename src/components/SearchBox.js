import React, {Component} from "react";

export class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      recipes: {},
      ingredients: [],
      instructions: {},
      ing: "",
      menu: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getIndRec = this.getIndRec.bind(this);
    this.getRecipes = this.getRecipes.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value);
  }


  handleSubmit(event) {
    event.preventDefault();
    let ingString = this.state.value.split(",").map(x => x.trim());

    ingString = ingString.map((x, i) => {
      let lastIdx = ingString.length - 1;
      console.log(lastIdx);
      if (i == lastIdx) {
        return x;
      } else {
        return x + "%2C";
      }
    });

    console.log(ingString);
    this.setState({
      ing: ingString.join("")
    });
    // this.state.ingredients = this.state.value.split(",");
    // this.state.ing = this.state.ingredients.map(x => x.trim());
    // console.log(this.state.ingredients[0]);
    console.log(this.state.ing);
    this.getRecipes();
  }
  
  //"https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1"
  getRecipes() {
    let ing = this.state.ing;
    let baseUrl =
      "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
    //increasing recipe return count to render them in 5 ct collections
    let endUrl = "&limitLicense=false&number=10&ranking=1";
    fetch(baseUrl + ing + endUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
      }
    }).then(response => {
      console.log(response);
      return response.json().then(data => {
        console.log(data);
        // let recipes1 = data.slice(0,5)
        this.setState({
          recipes1: [data.slice(0, 5)],
          recipes2: [data.slice(5)]
        });
        console.log(this.state.recipes1);
      });
    });
  }

  renderInstructions(instructions) {
    let ingList = instructions.recIng.map(ing =>
      <li key={ing}>
        {ing}
      </li>
    );
    return (
      <div className="recipeIns">
        <ul>
          {ingList}
        </ul>
        {instructions.instructions}
      </div>
    );
  }

  render() {
   
    // <label>
    // {" "}Ingredients:
    // </label>
    return (
      <div className="form">
        <h1> Enter Comma-Separated Ingredients and Submit</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <input type="submit" value="Submit" />
        </form>

        <div className="recipe">
          {" "}{menu}
        </div>
      </div>
    );
  }
}
