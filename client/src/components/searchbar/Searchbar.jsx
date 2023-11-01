

// function Searchbar (){
//     return(
//         <div>
//             <input placeholder="Ingresa tu busqueda"></input>
//             <Button text='Buscar'></Button>
//         </div>
//     )
// }

// export default Searchbar




// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCountries } from '../../redux/actions';

// function Searchbar() {
//   const dispatch = useDispatch();
//   const [query, setQuery] = useState('');
//   const [filteredCountries, setFilteredCountries] = useState([]); // Nuevo estado para los países filtrados
//   const countries = useSelector((state) => state.countries);

//   useEffect(() => {
//     dispatch(fetchCountries());
//   }, [dispatch]);

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (countries) {
//       const filtered = countries.filter((country) => {
//         return country.nombre.toLowerCase().includes(query.toLowerCase());
//       });

//       // Actualiza el estado con los países filtrados
//       setFilteredCountries(filtered);
//     }
//   };

//   return (
//     <div className="search-bar">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Buscar país"
//           onChange={handleChange}
//           value={query}
//         />
//         <button type="submit">Buscar</button>
//       </form>
//       <div className="filtered-countries">
//         <ul>
//           {filteredCountries.map((country) => (
//             <li key={country.id}>{country.nombre}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Searchbar;



import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar país"
          onChange={handleChange}
          value={query}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}

export default Searchbar;