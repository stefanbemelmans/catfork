import React, { Component } from 'react';
import catForkImg from './images/CatForkTitleSmall.png';
import CatPic from './components/CatPicComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={catForkImg} className="" alt="logo" />
          
        </div>
        <p className="app-intro"> This is a recipe search app based on ingredients you enter. Please separate them by a comma and enter at least two (2). </p>
        <CatPic />
      </div>
    );
  }
}

export default App;
