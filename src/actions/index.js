 //let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/{id}/information?includeNutrition=false";
 let baseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
 let endUrl = "&limitLicense=false&number=10&ranking=1";

 let recBaseUrl = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
 let recEndUrl = "/information?includeNutrition=false";

export function getRecipes(searchTerm) {
  let ings = searchTerm;
  return function (dispatch) {
    dispatch({
      type: "GET_RECIPES"
    });
    fetch(baseUrl + ings + endUrl, {
      headers: {
              "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
              }
      })
      .then( (response) => {
        return response.json();
      }).then((recipes) => {
        dispatch(searchLoaded(recipes));
      });
  };
}

export function searchLoaded(recipes) {
  return {
    type: "SEARCH_RESULTS_LOADED",
    value: recipes
  };
}

export function getIndRec(id) {
  return function (dispatch) {
    dispatch({
      type: "GET_IND_REC"
    });
  
    fetch(recBaseUrl + id + recEndUrl)
      .then( (response) => {
         headers: {
        "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
        }
        return response.json();
      }).then((recipe) => {
        dispatch(indRecLoaded(recipe))
      });
  }
};

export function indRecLoaded(recipe) {
  return {
    type: "IND_REC_LOADED",
    value: recipe
  };
}
// export function getIndRec(id) {
 
//   fetch(recBaseUrl + recId + recEndUrl, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
//     }
//   }).then(response => {
//     console.log(response);
//     return response.json().then(data => {
//       var recIng = data.extendedIngredients.map(ing => ing.originalString);
//       var instructions = data.instructions;
//       this.setState({
//         instructions: {
//           ...this.state.instructions,
//           [id]: { recIng, instructions }
//         }
//       });
//       console.log(data);
//     });
//   });
// }





// export function myMovieListLoaded(movies) {
//   return {
//     type: "MY_MOVIE_LIST_LOADED",
//     value: movies
//   };
// }
// getRecipes() {
  
//   fetch(, {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "X-Mashape-Key": "YmReyxlVdYmshU5Dlyo9XYbBPZtep1KJPXujsnt4Hiueq8H23o"
//     }
//   }).then(response => {
//     console.log(response);
//     return response.json().then(data => {
//       console.log(data);
//       // let recipes1 = data.slice(0,5)
//       this.setState({
//         recipes1: [data.slice(0, 5)],
//         recipes2: [data.slice(5)]
//       });
//       console.log(this.state.recipes1);
//     });
//   });
// }

// export function saveMyMovie(movie) {
//   return function (dispatch) {
//     dispatch({
//       type: "SAVE_MY_MOVIE"
//     });

//     fetch("/movies", {
//       method: "POST",
//       headers: {"Content-Type": "application/JSON"},
//       body: JSON.stringify(movie)
//     }).then(() => dispatch(loadMyMovieList()));
  
//   };
// }

// export function removeMyMovie(id) {
//   return function (dispatch) {
//     dispatch({
//       type: "REMOVE_MY_MOVIE"
//     })
//     fetch("/movies/" + id, {
//       method: "delete"
//     }).then(() => dispatch(loadMyMovieList()));
//   };
    
// }
