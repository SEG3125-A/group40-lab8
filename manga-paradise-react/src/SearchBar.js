import React from "react";
import "./SearchBar.css";

const SearchBar = ({
  searchTerm,
  onSearchChange,
  onCategoryChange,
  onSearchSubmit,
  category,
}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for a Manga"
        onChange={onSearchChange}
        autoComplete="off"
      />
      <button onClick={onSearchSubmit}>Search</button>
      <select value={category} onChange={onCategoryChange}>
        <option value="popularity">Popularity</option>
        <option value="publish_date">Publish Date</option>
        <option value="genre">Genre</option>
        {}
      </select>
    </div>
  );
};

export default SearchBar;
