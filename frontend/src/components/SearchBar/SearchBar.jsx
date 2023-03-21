import React, { useState, useEffect } from 'react';
import './SearchBar.css'



const SearchBar = ({ getVideoResults, setSearchTerms, searchTerms}) => {
    

    function handleSearch(event){
        event.preventDefault();
        getVideoResults();
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input type='search' onChange={(event) => setSearchTerms(event.target.value)} value={searchTerms} className='search-bar'/>
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;