import { connect } from "react-redux";
import {getIndRecipe} from "../actions";
import Recipe from "./components/Recipe";

function mapDispatchToProps(dispatch) {
  return {
    getIndRecipe(id) {
      const action = getIndRecipe(id);
      dispatch(action);
    }
  };
}
 
function mapStateToProps(id) {
  return {
  recipe: state.recipes[id]  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);