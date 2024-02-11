
import React from "react";

//function to dearch for a transaction
function SearchBar({onSearch}){
    return(
    <div className="search-bar">
     <input
      type="text"
      placeholder="Search by description"
      onChange={(event) => onSearch(event.target.value)}
     />    
    </div>
    )
}
export default SearchBar;