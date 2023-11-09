import React, { useState } from 'react';

function Searchbar({ onSearch, onReset }) {
  const [findCountry, setfindCountry] = useState('');

  const handleChange = (event) => {
    setfindCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(findCountry);
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
          value={findCountry}
        />
        <button type="submit">Buscar</button>
        <button onClick={handleReset}>Todos</button>
      </form>
      <hr></hr>
    </div>
  );
}

export default Searchbar;
