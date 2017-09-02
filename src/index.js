import React from 'react';
import ReactDOM from 'react-dom';

import App from "./containers/AppContainer";
import "./index.css";
import { Provider } from "react-redux";
// import users from "./users";
import store from "./store";

ReactDOM.render(<App />, document.getElementById('root'));

