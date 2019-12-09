/* eslint-disable no-undef */
import React, { Component } from "react";
import catForkImg from "./images/catForkImg_square.png";
import { CatPic } from "./components/CatPicComponent.js";
import "./App.css";
import RecipeSearchBox from "./Features/Recipes/Search/RecipeSearchBox";
import RecipeList from "./Features/Recipes/components/RecipeList";
import firebase from "firebase";
require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catUrl: null
    };
    this.getCatPic();
  }

  async getCatPic() {
    var response = await fetch(
      "https://thecatapi.com/api/images/get?format=src&size=med"
    );
    // eslint-disable-next-line no-console
    console.log("hitting getnew cat", response);
    this.setState({
      catUrl: response.url
    });
  }

  render() {
    return (
      <div className="app">
        <div className="catPicContainer">
         <div>
            <img className="catforkLogo" src={catForkImg} alt="logo" />
         </div>
          <CatPic catUrl={this.state.catUrl} />
          <button className="btn-class" onClick={this.getCatPic.bind(this)}>
            New Cat
          </button>
        </div>
          <p className="app-intro">
            {" "}
            This is a recipe search app based on ingredients you enter. Please
            separate them by a comma and enter at least two (2).{" "}
          </p>
        <RecipeSearchBox />

        <RecipeList />
      </div>
    );
  }
}

export default App;
