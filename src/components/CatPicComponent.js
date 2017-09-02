  import React, {Component} from 'react';

  export default  class CatPic extends React.Component {
    constructor() {
      super();
      this.state = {
        kitty: 'https://thecatapi.com/api/images/get?format=src&size=med"'
      };
      this.resetCatPic = this.resetCatPic.bind(this);
    }
  
    resetCatPic() {
      let newCat = "https://thecatapi.com/api/images/get?format=src&size=med";
      fetch(newCat)
        .then(function(response) {
          console.log(response);
          return response.blob();
        })
        .then(myBlob => {
          console.log(myBlob);
          // debugger
          this.setState({
            kitty: URL.createObjectURL(myBlob)
          });
        });
    }
  
    render() {
      return (
        <div Col-xs={10} Col-sm={8} Col-md={6}>
          <a href="https://thecatapi.com">
            <img className="catPic" src={this.state.kitty} alt="logo" />
          </a>
          <button className="btn-class" onClick={this.resetCatPic}>
            New Cat
          </button>
        </div>
      );
    }
  }
