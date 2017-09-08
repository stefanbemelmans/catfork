import { connect } from "react-redux";
import {getIndRec,renderRecipe} from "../actions";
import Recipe from "../components/Recipe";

function mapDispatchToProps(dispatch) {
  return {
    renderRecipe(id) {
      const action = renderRecipe(id);
      dispatch(action);
    }
  
  // renderRecipe(recipe) {
  //   const action = renderRecipe(recipe);
  //   dispatch(action);
  // }
}
}
 
function mapStateToProps(state) {
  return {
  recipe: state.renderRecipe
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
