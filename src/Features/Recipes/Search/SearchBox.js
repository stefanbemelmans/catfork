import React, {useState} from "react"
import {fetchRecipes} from "./SearchBoxContainer"
import {useDispatch} from "react-redux"

export const SearchBox = () => {

  const dispatch = useDispatch()  
  const [searchTerms] = useState("")
 
    return (
      <div id="search" className="Search">
        <input 
          type="search"
          placeholder="Enter comma separated ingredients..."
          onChange={(e) => searchTerms(e.target.value)}
          />
       {/* TODO: add searchTerm validation */}
       <button type="submit" title="Search" onClick={() => dispatch(fetchRecipes(searchTerms))}>
         Search!
       </button>
       
      </div>
    );
  }
export default SearchBox;

