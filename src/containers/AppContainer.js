import App from "../App";
import {connect} from "react-redux";
// import {loadMyRecipes} from "../actions";

function mapStateToProps(state) {
  return {
    recipes: state.searchResults
   // myRecipeList: state.myRecipeList
  };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     loadMyMovieList() {
//       const action = loadMyMovieList();
//       dispatch(action);
//     }
//   };
// }

export default connect(mapStateToProps, null)(App);