import React from "react";
import CatForkLogo from "./CatForkLogo.png";

const CatForkFb = "https://www.facebook.com/CatFork-105145911141520";
const CatGram ="https://www.instagram.com/_catfork_/";
const IntroText = "This is a recipe search app based on ingredients you enter.";
const CatApiLink = "https://thecatapi.com";
const SpoonacularLink = "https://spoonacular.com/";

export const CatForkHeader = () => {
  return (
    <div className="container-fluid text-center">
        
      <h3 className="appIntroText">
        {IntroText} <br />
        <a href={CatApiLink}>Powered by Cats </a>
        And {" "}
        <a href={SpoonacularLink}>Spoonacular </a>
      </h3>
      <h3>We're Updating so things are under construction.</h3>
      <a href={CatForkFb}> Say HI On the FB </a> --
      <a href={CatGram}>Or At the Gram</a>

      <div className="m-2">
        <img src={CatForkLogo} alt="Logo" />
      </div>
    </div>
  );
};
