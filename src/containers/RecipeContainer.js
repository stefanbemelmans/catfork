import { connect } from "react-redux";
import {getIndRec,renderRecipe} from "../actions";
import Recipe from "../components/Recipe";

function mapDispatchToProps(dispatch) {
  return {
    getIndRec(id) {
      const action = getIndRec(id);
      dispatch(action);
    },
  
  renderRecipe(recipe) {
    const action = renderRecipe(recipe);
    dispatch(action);
  }
}
}
 
function mapStateToProps(state) {
  return {
  recipe: state.indRec
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
