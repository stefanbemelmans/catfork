import React from "react";
import CatForkLogo from "./CatForkLogo.png";

const IntroText = "This is a recipe search app based on ingredients you enter.";
const CatApiLink = "https://thecatapi.com";
const SpoonacularLink = "https://spoonacular.com/";

export const CatForkHeader = () => {
  return (
    <div className="m-2 p-3 text-center">
        
      <h3 className="appIntroText">
        {IntroText} <br />
        <a href={CatApiLink}>Powered by Cats </a>
        And {" "}
        <a href={SpoonacularLink}>Spoonacular </a>
      </h3>
      <div className="m-2">
        <img src={CatForkLogo} alt="Logo" className="w-100 h-100" />
      </div>
    </div>
  );
};
