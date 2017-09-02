import { connect } from "react-redux";
import {getIndRecipe, searchLoaded} from "../actions";
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
  return {
  recipes: state.searchResults  
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeList);