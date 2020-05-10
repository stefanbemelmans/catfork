/* eslint-disable no-undef */
import React from "react";

import { CatForkHeader } from "./Features/Header/CatForkHeader";
import { CatPicComponent } from "./Features/CatPic/CatPicComponent";
import { RecipeSearchBox } from "./Features/Recipes/Search/RecipeSearchBox";
import { RecipeList } from "./Features/Recipes/components/RecipeList";
// import firebase from "firebase";
// import firebaseConfig from "./Features/Firebase/firebaseConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

// firebase.initializeApp(firebaseConfig);
export const App = () => {
  let recipeList = useSelector(state => state.searchResults);
  return (
    // TODO: Cats eating salami background marquee, have the images
    <div className="app">

      <CatForkHeader />

      <CatPicComponent />

      <RecipeSearchBox />

     
     
    </div>
  );
};

export default App;
