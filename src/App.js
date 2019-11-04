/* eslint-disable no-undef */
import React, { Component } from 'react';
import catForkImg from "./images/catForkImg_square.png";
import { CatPic } from "./components/CatPicComponent.js";
import "./App.css";
import SearchBox from "./containers/SearchBoxContainer";
import RecipeList from "./containers/RecipeListContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      catUrl: null
    }
  }

 async resetCatPic() {
   var response = await fetch("https://thecatapi.com/api/images/get?format=src&size=med")
   // eslint-disable-next-line no-console
   console.log("hitting getnew cat", response);
   this.setState({
     catUrl: response.url
   });
 } 

  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={catForkImg} className="" alt="logo" />
        </div>
        <p className="app-intro"> This is a recipe search app based on ingredients you enter. Please separate them by a comma and enter at least two (2). </p>
        <CatPic catUrl={this.state.catUrl} />
        <button className="btn-class" onClick={this.resetCatPic.bind(this)}>
            New Cat
          </button>
        {/* <SearchBox />

        <RecipeList /> */}
      </div>
    );
  }
}

export default App;
