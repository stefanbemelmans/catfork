  import React, {Component} from 'react';
  // import axios from "axios";
  export default  class CatPic extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <a href="https://thecatapi.com">
            <img className="catPic" src={this.props.catUrl} alt="logo" />
          </a>
          <button className="btn-class" onClick={this.resetCatPic}>
            New Cat
          </button>
        </div>
      );
    }
  }
