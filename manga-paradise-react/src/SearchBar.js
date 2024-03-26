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
    <div className="search-bar my-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search for a Manga"
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={onSearchSubmit}
        >
          Search
        </button>
        <select
          className="form-select"
          value={category}
          onChange={onCategoryChange}
        >
          <option value="popularity">Popularity</option>
          <option value="publish_date">Publish Date</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
