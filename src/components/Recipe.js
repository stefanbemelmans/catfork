import React from "react";

export default function Recipe (props) {

    return (
      <div className="recipe" key={props.rec.id}>
        <button onClick={() => props.getIndRec(props.rec.id)}>
          {" "}{props.rec.title}{" "}
        </button>
        <img
          className="recPic"
          src={props.rec.image}
          alt="../images/CatforkTitleSmall.png"
        />
        {/* {this.state.instructions[props.rec.id]
          ? this.renderInstructions(.instructions[props.rec.id])
          : ""} */}
      </div>
    );
  }
