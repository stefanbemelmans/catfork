/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import catForkImg from "./images/catForkImg_square.png";
import { CatPic } from "./components/CatPicComponent.js";
import "./App.css";
import RecipeSearchBox from "./Features/Recipes/Search/RecipeSearchBox";
import RecipeList from "./Features/Recipes/components/RecipeList";
import firebase from "firebase";
import firebaseConfig from "./Features/Firebase/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
firebase.initializeApp(firebaseConfig);

export const App = () => {
  const [catPicUrl, setCatPicUrl] = useState("");

  // getCatPic(setCatPicUrl);
  useEffect(() => {
    if (!catPicUrl) {
      console.log("setting CatPic in UseEffect");
      getCatPic(setCatPicUrl);
    }
  });

  return (
    <div className="app">
      <h3 className="app-intro">
        {" "}
        This is a recipe search app based on ingredients you enter. Please
        separate them by a comma and enter at least two (2).{" "}
      </h3>
      <div className="catPicContainer">
        <div>
          <img className="catforkLogo" src={catForkImg} alt="logo" />
        </div>
        <CatPic catUrl={catPicUrl} />
        <button className="btn-class" onClick={() => getCatPic(setCatPicUrl)}>
          New Cat
        </button>
      </div>

      <RecipeSearchBox />

      <RecipeList />
    </div>
  );
};

export default App;
async function getCatPic(setCatPicUrl) {
  var response = await fetch(
    "https://thecatapi.com/api/images/get?format=src&size=med"
  );
  // eslint-disable-next-line no-console
  console.log("hitting getnew cat", response);
  setCatPicUrl(response.url);
  // this.setState({
  //   catUrl: response.url
  // });
}
