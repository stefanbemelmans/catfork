import state from "./state";
import reducers from "./reducers/index";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
const composeEnhancers =
  typeof window === "object"
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
);

const store = createStore(reducers,state,enhancer, 
  // eslint-disable-next-line no-undef
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;
