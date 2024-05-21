import React from "react";
import "./SearchRecipe.scss";

const Search = ({ handleSearch }) => {
  return (
    <main>
      <div className="search-container">
        <div className="search-bar">
          <input onChange={handleSearch} type="text" placeholder="search for recipes" />
        </div>
      </div>
    </main>
  );
};

export default Search;