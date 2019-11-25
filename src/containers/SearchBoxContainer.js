import { connect } from "react-redux";
import * as recipeActions from "../actions";
import
import SearchBox from "../components/SearchBox";
// const baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
// const endUrl = "&limitLicense=false&number=2&ranking=1";

// const recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
// const recEndUrl = "/information?includeNutrition=false";

fetchRecipes = (searchTerm) => {
  const ingredientsToSearch = searchTerm
  getRecipes(ingredientsToSearch)
  return dispatch => dispatch(recipeActions.FETCH_RECIPES)
  }

    const recipes = await fetch(baseUrl + ings + endUrl, {
      headers: {
              "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
              }
      })
      recipes =
      .then( (response) => {
        return response.json();
      }).then((recipes) => {
        dispatch(searchLoaded(recipes));
      });
  };
}

getRecipes = async(searchTerms) => {
  const recipes = await fetch(recipeSearchBaseUrl + searchTerms + recipeSearchEndUrl, {
    headers: {
            "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
            }
    });
    const parsedRecipes = await recipes.json();
    return dispatch => dispatch(recipeActions.SET_RECIPES(parsedRecipes))
}


function mapDispatchToProps(dispatch) {
  return {
    getRecipes(searchTerm) {
      const action = getRecipes(searchTerm);
      dispatch(action);
    }
  };
}
 
export default connect(null,mapDispatchToProps)(SearchBox);