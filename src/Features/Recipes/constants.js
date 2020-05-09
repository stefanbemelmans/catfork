/* eslint-disable no-undef */

const ingredientProductionSearchUrl = "https://servercat.herokuapp.com/api/recipeSearch/?ingredients=";
// const ingredientSearchBaseUrl = "http://localhost:5000/api/recipeSearch/?ingredients="

const recipeDetailEndpoint ="https://servercat.herokuapp.com/api/recipeDetail/?id=";

const recipeDetailsProductionUrl = (recipeId) => recipeDetailEndpoint + recipeId;

export default recipeDetailsProductionUrl


