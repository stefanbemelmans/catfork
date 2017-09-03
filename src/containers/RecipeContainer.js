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
 
function mapStateToProps(state) {
  return {
  recipe: state.indRecipe  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);
