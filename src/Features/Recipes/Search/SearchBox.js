import React, {useState} from "react"
import {FETCH_RECIPES} from "../recipeActionTypes"
import {useDispatch} from "react-redux"

export const SearchBox = () => {

  const dispatch = useDispatch()  
  const [searchTerms, setSearchTerms] = useState("")
//  const fetchRecipes = (ingredients) => {
//    console.log("inside SearchBox");
//    dispatch(FetchRecipes(ingredients))
//  }
    return (
      <div id="search" className="Search">
        <input 
          type="search"
          placeholder="Enter comma separated ingredients..."
          onChange={(e) => setSearchTerms(e.target.value)}
          />
       {/* TODO: add searchTerm validation */}
       <button type="submit" title="Search" onClick={() => dispatch({type:FETCH_RECIPES})}>
         Search!
       </button>
       
      </div>
    );
  }
export default SearchBox;

