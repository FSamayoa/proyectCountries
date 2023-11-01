// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchCountries } from '../../redux/actions';
// import Card from '../card/Card';
// import PageNumbers from '../PageNumbers/PageNumbers';

// function Cards() {
//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.countries);

//   useEffect(() => {
//     // Realizar la solicitud para obtener la lista de países
//     dispatch(fetchCountries());
//   }, [dispatch]);

//   // Calcular el número total de páginas después de obtener los países
//   const totalPages = Math.ceil(countries.length / 10);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [paginatedCountries, setPaginatedCountries] = useState([]);

//   useEffect(() => {
//     // Calcular el índice de inicio y fin de los países para la página actual
//     const startCountryIndex = (currentPage - 1) * 10;
//     const endCountryIndex = startCountryIndex + 10;

//     // Obtener los países para la página actual
//     const currentCountries = countries.slice(startCountryIndex, endCountryIndex);

//     // Actualizar el estado de los países paginados
//     setPaginatedCountries(currentCountries);
//   }, [countries, currentPage]);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div>
//       {paginatedCountries.map((country) => (
//         <Card key={country.id} country={country} />
//       ))}

//       <PageNumbers
//         totalPages={totalPages}
//         current={currentPage}
//         onPageChange={handlePageChange}
//       />
//     </div>
//   );
// }

// export default Cards;





import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions';
import Card from '../card/Card';
import PageNumbers from '../PageNumbers/PageNumbers';
import Searchbar from '../searchbar/Searchbar'; // Asegúrate de proporcionar la ruta correcta

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    // Realizar la solicitud para obtener la lista de países
    dispatch(fetchCountries());
  }, [dispatch]);

  // Calcular el número total de páginas después de obtener los países
  const totalPages = Math.ceil(countries.length / 10);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCountries, setPaginatedCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);

  useEffect(() => {
    // Calcular el índice de inicio y fin de los países para la página actual
    const startCountryIndex = (currentPage - 1) * 10;
    const endCountryIndex = startCountryIndex + 10;

    // Obtener los países para la página actual
    const currentCountries = searchedCountries.length > 0
      ? searchedCountries.slice(startCountryIndex, endCountryIndex)
      : countries.slice(startCountryIndex, endCountryIndex);

    // Actualizar el estado de los países paginados
    setPaginatedCountries(currentCountries);
  }, [countries, currentPage, searchedCountries]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (searchQuery) => {
    // Realizar la búsqueda y filtrar los países
    const filteredCountries = countries.filter((country) =>
      country.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Actualizar el estado local con los países filtrados
    setSearchedCountries(filteredCountries);

    // Reiniciar la paginación a la primera página
    setCurrentPage(1);
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      {paginatedCountries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
      <PageNumbers
        totalPages={searchedCountries.length > 0 ? Math.ceil(searchedCountries.length / 10) : totalPages}
        current={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
