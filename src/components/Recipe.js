export default function Recipe (props) {

    return (
      <div className="recipe" key={props.rec.id}>
        <button onClick={() => this.getIndRec(rec.id)}>
          {" "}{props.rec.title}{" "}
        </button>
        <img
          className="recPic"
          src={props.rec.image}
          alt="../images/CatforkTitleSmall.png"
        />
        {this.state.instructions[rec.id]
          ? this.renderInstructions(this.state.instructions[props.rec.id])
          : ""}
      </div>
    );
  }
