  import React from 'react';
  // import axios from "axios";
  export const CatPic = (props) => {
      return (
        <div id="catPicContainer">
          <a href="https://thecatapi.com">
            <img className="catPic" src={props.catUrl} alt="logo" />
          </a>
        </div>
      );
    };
    
   