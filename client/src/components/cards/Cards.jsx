import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions';
import Card from '../card/Card';
import PageNumbers from '../PageNumbers/PageNumbers';
import Searchbar from '../searchbar/Searchbar'; // Asegúrate de proporcionar la ruta correcta
import styles from "../cards/Cards.module.css"

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

  const [regionFilter, setRegionFilter] = useState(''); // Filtro por región
  const [sortBy, setSortBy] = useState(''); // Ordenamiento


  useEffect(() => {
    // Calcular el índice de inicio y fin de los países para la página actual
    const startCountryIndex = (currentPage - 1) * 10;
    const endCountryIndex = startCountryIndex + 10;
    const currentCountries = sortedCountries.slice(startCountryIndex, endCountryIndex);

    // Obtener los países para la página actual
    // const currentCountries = searchedCountries.length > 0
    //   ? searchedCountries.slice(startCountryIndex, endCountryIndex)
    //   : countries.slice(startCountryIndex, endCountryIndex);

    // Actualizar el estado de los países paginados
    setPaginatedCountries(currentCountries);
  }, [countries, currentPage, searchedCountries, regionFilter, sortBy]);

  const filteredCountries = searchedCountries.length > 0
    ? searchedCountries
    : countries;

  const filteredByRegion = regionFilter
    ? filteredCountries.filter((country) => country.region === regionFilter)
    : filteredCountries;

  // Aplicar ordenamiento
  const sortedCountries = [...filteredByRegion];

  if (sortBy === 'name') {
    // Ordenar por nombre
    sortedCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (sortBy === 'nameDesc') {
    // Ordenar por nombre en orden descendente (z-a)
    sortedCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }





  const handleRegionFilter = (selectedRegion) => {
    // Aplicar el filtro por región
    setRegionFilter(selectedRegion);

    // Restablecer la página actual cuando se aplica el filtro
    setCurrentPage(1);
  };

  // Función para cambiar el criterio de ordenamiento
  const handleSortChange = (selectedSort) => {
    setSortBy(selectedSort);
  };

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
      <div>
        <Searchbar onSearch={handleSearch} onReset={handleResetSearch} />
        {showNotFound ? (
          <p>{`El país "${notFoundCountry}" no se encontró.`}</p>
        ) : null}
      </div>
      <div>
        <button onClick={() => handleRegionFilter('')}>All</button>
        <button onClick={() => handleRegionFilter('Africa')}>Africa</button>
        <button onClick={() => handleRegionFilter('Americas')}>America</button>
        <button onClick={() => handleRegionFilter('Asia')}>Asia</button>
        <button onClick={() => handleRegionFilter('Europe')}>Europa</button>
        <button onClick={() => handleRegionFilter('Oceania')}>Oceania</button>
        {/* Menú desplegable para ordenar */}
        <select onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Ordenado</option>
          <option value="name">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
      </div>
      <div className={styles.divCard}>
        {/* Renderizar tarjetas y números de página */}
        {sortedCountries.length > 0 ? (
          paginatedCountries.map((country) => (
            <Card key={country.id} country={country} />
          ))
        ) : (
          <p>No se encontraron países que cumplan con los filtros seleccionados.</p>
        )}
      </div>
      <PageNumbers
        totalPages={Math.ceil(sortedCountries.length / 10)}
        current={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
