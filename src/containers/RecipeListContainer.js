import { connect } from "react-redux";
import {searchLoaded} from "../actions";
import RecipeList from "../components/RecipeList";

// function mapDispatchToProps(dispatch) {
//   return {
//     getIndRecipe(id) {
//       const action = getIndRecipe(id);
//       dispatch(action);
//     }
//   };
// }
 
function mapStateToProps(state) {
  return {
  recipes: state.searchResults  
  }
};
export default connect(mapStateToProps,null)(RecipeList);