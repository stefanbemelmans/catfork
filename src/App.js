/* eslint-disable no-undef */
import React from "react";

import { CatForkHeader } from "./Features/Header/HeaderComponent";
import { CatPicComponent } from "./Features/CatPic/CatPicComponent";
import { RecipeSearchBox } from "./Features/Recipes/Search/RecipeSearchBox";
import { RecipeList } from "./Features/Recipes/components/RecipeList";

import firebase from "firebase";
import firebaseConfig from "./Features/Firebase/firebaseConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

firebase.initializeApp(firebaseConfig);

export const App = () => {
  return (
    // TODO: change text for mobile
    // TODO: Cats eating salami background marquee, have the images
    <div className="app container-fluid justify-content-center">
      <CatForkHeader />

      <CatPicComponent />

      <RecipeSearchBox />
      <div className="container-fluid">
        <RecipeList />
      </div>
    </div>
  );
};

export default App;
