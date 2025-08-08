import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name..."
        onChange={e => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
