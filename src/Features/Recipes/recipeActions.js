import * as recipeActions from "./recipeActionTypes"
import { fetchRecipes } from "../../containers/SearchBoxContainer"

 export const fetchRecipes = () => {
   type: recipeActions.FETCH_RECIPES,

} 