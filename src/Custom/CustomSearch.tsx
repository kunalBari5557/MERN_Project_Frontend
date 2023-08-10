import React, { useState } from 'react';

const SearchComponent = ({ onSearch }:any) => {
  const [searchText, setSearchText] = useState('');
  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleChange = (e:any) => {
    const newValue = e.target.value;
    setSearchText(newValue);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter your search"
        value={searchText}
        onChange={handleChange} // Use the handleChange function
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
