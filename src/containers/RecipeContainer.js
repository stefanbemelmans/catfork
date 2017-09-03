import { connect } from "react-redux";
import {getIndRecipe} from "../actions";
import RecipeList from "../components/RecipeList";

function mapDispatchToProps(dispatch) {
  return {
    getIndRecipe(id) {
      const action = getIndRecipe(id);
      dispatch(action);
    }
  };
}
 
function mapStateToProps(state) {
  
}