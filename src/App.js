/* eslint-disable no-undef */
import React from "react";

import { CatForkHeader } from "./Features/Header/CatForkHeader";
import { CatPicComponent } from "./Features/CatPic/CatPicComponent";
import { RecipeSearchBox } from "./Features/Recipes/Search/RecipeSearchBox";
import { RecipeList } from "./Features/Recipes/components/RecipeList";
import { useSelector } from "react-redux";
import firebase from "firebase";
import firebaseConfig from "./Features/Firebase/firebaseConfig";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

firebase.initializeApp(firebaseConfig);

export const App = () => {
  // let flags = useSelector(state => state);
  // let loading = flags.loading;
  // let isLoading = flags.isLoading;
  // let error = flags.error;
  return (
    // TODO: Cats eating salami background marquee, have the images
    <div className="app container-fluid justify-content-center">
      {/* <div>
        <h3>Recipes Loading: {loading} </h3>
        <h3>Recipes isLoading: {isLoading} </h3>
        <h3>Recipes Error: {error} </h3>
      </div> */}
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
