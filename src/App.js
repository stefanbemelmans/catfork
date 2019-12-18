/* eslint-disable no-undef */
import React from "react";
import catForkImg from "./images/catForkImg_square.png";
import { CatPicComponent } from "./Features/CatPic/CatPicComponent";
import "./App.css";
import RecipeSearchBox from "./Features/Recipes/Search/RecipeSearchBox";
import RecipeList from "./Features/Recipes/components/RecipeList";
import firebase from "firebase";
import firebaseConfig from "./Features/Firebase/firebaseConfig";
// TODO: remove bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
firebase.initializeApp(firebaseConfig);

export const App = () => {
  

  return (
    // TODO: change text for mobile
    // TODO: Cats eating salami background marquee, have the images
    <div className="app">
      
      <h3 className="appIntroText">
        This is a recipe search app based on ingredients you enter. <br />
        <a href="https://thecatapi.com"> 
          And Powered by Cats
          </a>
      </h3>
      <div className="main">
        <div>
          <img className="catforkLogo" src={catForkImg} alt="logo" />
        </div>
        
        <CatPicComponent />
        
      </div>

      <RecipeSearchBox />

      <RecipeList />
    </div>
  );
};

export default App;


