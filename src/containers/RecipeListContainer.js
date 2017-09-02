import { connect } from "react-redux";
import {getIndRecipe} from "../actions";
import SearchBox from "../components/SearchBox";

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
    
  }
}
export default connect(null,mapDispatchToProps)(SearchBox);