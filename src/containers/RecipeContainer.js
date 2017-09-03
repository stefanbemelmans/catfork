import { connect } from "react-redux";
import {getIndRec} from "../actions";
import Recipe from "../components/Recipe";

function mapDispatchToProps(dispatch) {
  return {
    getIndRec(id) {
      const action = getIndRec(id);
      dispatch(action);
    }
  };
}
 
function mapStateToProps(state) {
  return {
  recipe: state.indRecipe
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(Recipe);
