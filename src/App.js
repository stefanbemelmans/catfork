/* eslint-disable no-undef */
import React from "react";

import { CatForkHeader } from "./Features/Header/CatForkHeader";
import { CatPicComponent } from "./Features/CatPic/CatPicComponent";
import { RecipeSearchBox } from "./Features/Recipes/Search/RecipeSearchBox";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// firebase.initializeApp(firebaseConfig);
export const App = () => {
 
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
