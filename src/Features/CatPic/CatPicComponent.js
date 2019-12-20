import React, { useState, useEffect } from "react";
import { CatPic } from "./CatPic";

export const CatPicComponent = props => {
  const [catPicUrl, setCatPicUrl] = useState("");

  // I was suspicious, but the hook works.
  //  I pass the 'setCatPicUrl' hook to the 'getCatPic' function
  //  so it can use it to set the catPicUrl state.
  useEffect(() => {
    if (!catPicUrl) {
      console.log("setting CatPic in UseEffect");
      getCatPic(setCatPicUrl);
    }
  });

  return (
    <div className="catPicComponent">
      <CatPic catUrl={catPicUrl} />
      <button className="btn-class" onClick={() => getCatPic(setCatPicUrl)}>
        New Cat
      </button>
    </div>
  );
};
// Pass in the setCatPicUrl Hook
// TODO: remove url magic string
async function getCatPic(setCatPicUrl) {
  var response = await fetch(
    "https://thecatapi.com/api/images/get?format=src&size=med"
  );
  setCatPicUrl(response.url);
}
