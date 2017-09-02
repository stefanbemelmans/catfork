import { connect } from "react-redux";
import {getRecipes} from "../actions";
import SearchBox from "../components/SearchBox";


function mapDispatchToProps(dispatch) {
  return {
    getRecipes(searchTerm) {
      const action = getRecipes(searchTerm);
      dispatch(action);
    }
  };
}
 
export default connect(null,mapDispatchToProps)(SearchBox);