import React, { useState } from 'react';

function Searchbar({ onSearch, onReset }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  const handleReset = () => {
  
    onReset();
  };

  return (
    <div className="search-bar">
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar país"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Buscar</button>
      <button onClick={handleReset}>Todos</button>
      </form>
      <hr></hr>
    </div>
  );
}

export default Searchbar;
