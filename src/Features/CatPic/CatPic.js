import React from "react";

export const CatPic = props => {
  return (
    <div className="catPic">
      <img className="catFull" src={props.catUrl} alt="logo" />
    </div>
  );
};
