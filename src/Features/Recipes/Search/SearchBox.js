import React, {useState} from "react"
import {FetchRecipes} from "./SearchBoxContainer"
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
       <button type="submit" title="Search" onClick={() => dispatch(FetchRecipes(searchTerms))}>
         Search!
       </button>
       
      </div>
    );
  }
export default SearchBox;

