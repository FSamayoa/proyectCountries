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
  const [showNotFound, setShowNotFound] = useState(false); // Define showNotFound
  const [notFoundCountry, setNotFoundCountry] = useState(''); // Define notFoundCountry



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
    const filteredCountries = countries.filter((country) =>
      country.nombre.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Actualiza el estado de los países buscados
    setSearchedCountries(filteredCountries);
  
    // Verifica si se encontraron resultados
    if (filteredCountries.length === 0) {
      // Mostrar el mensaje de "País no encontrado"
      setShowNotFound(true);
      // Guarda el nombre del país no encontrado
      setNotFoundCountry(searchQuery);
    } else {
      // Restablecer el mensaje de "País no encontrado"
      setShowNotFound(false);
      setNotFoundCountry(''); // Limpia el nombre del país no encontrado
    }
  };
  


  const handleResetSearch = () => {
    // Restablecer los resultados de búsqueda
    setSearchedCountries([]);
  };

  

  return (
    <div>
      <Searchbar onSearch={handleSearch} onReset={handleResetSearch} />
      {showNotFound ? (
        <p>{`El país "${notFoundCountry}" no se encontró.`}</p>
      ) : null}
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
