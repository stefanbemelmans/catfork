import recipes from "./Features/Recipes/recipeReducers";
import {createStore, applyMiddleware, compose} from "redux";
import loggerMiddleware from './middleware/logger'
import monitorReducerEnhancer from './enhancers/monitorReducer'

const middlewareEnhancer = applyMiddleware(loggerMiddleware)
const composedEnhancers = compose(
  middlewareEnhancer,
  monitorReducerEnhancer
)
const store = createStore(recipes,undefined, composedEnhancers)
export default store;
