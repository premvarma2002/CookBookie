import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./SearchRecipe.scss";

const SearchRecipe = ({ handleSearch, setLoader }) => {
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleSearchClick = () => {
    handleSearch(searchedTerm);
    setLoader(true);
  };

  return (
    <main>
      <strong className="search">Search Recipes</strong>
      <div className="input-wrapper">
        <input
          onChange={(e) => setSearchedTerm(e.target.value)}
          value={searchedTerm}
          type="text"
          placeholder="Search your recipe..."
        />
        <button onClick={handleSearchClick}>
          <BsSearch />
        </button>
      </div>
    </main>
  );
};

export default SearchRecipe;
