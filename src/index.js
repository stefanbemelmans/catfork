import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
// import users from "./users";
import store from "./store";

// Importing the Bootstrap CSS

ReactDOM.render(<Provider store={store}><App /></Provider>,
   document.getElementById('root'));

