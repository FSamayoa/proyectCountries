import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions';
import Card from '../card/Card';
import PageNumbers from '../PageNumbers/PageNumbers';

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

  useEffect(() => {
    // Calcular el índice de inicio y fin de los países para la página actual
    const startCountryIndex = (currentPage - 1) * 10;
    const endCountryIndex = startCountryIndex + 10;

    // Obtener los países para la página actual
    const currentCountries = countries.slice(startCountryIndex, endCountryIndex);

    // Actualizar el estado de los países paginados
    setPaginatedCountries(currentCountries);
  }, [countries, currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {paginatedCountries.map((country) => (
        <Card key={country.id} country={country} />
      ))}

      <PageNumbers
        totalPages={totalPages}
        current={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
