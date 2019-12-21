import React, { useState, useEffect } from "react";
import Image from 'react-bootstrap/Image'

  
// import { CatPic } from "./CatPic";

export const CatPicComponent = () => {
  const [catPicUrl, setCatPicUrl] = useState("");

  useEffect(() => {
    if (!catPicUrl) {
      console.log("setting CatPic in UseEffect");
      getCatPic(setCatPicUrl);
    }
  });

  return (

    <div className="text-center catPicComponent">
      <div className="catPic">
        <Image src={catPicUrl} alt="logo" thumbnail />
      </div>
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
