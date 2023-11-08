import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions'
import Card from '../card/Card';
import PageNumbers from '../PageNumbers/PageNumbers'
import Searchbar from '../searchbar/Searchbar' 
import styles from "../cards/Cards.module.css"

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
   dispatch(getCountries());
  }, [dispatch]);

  const totalPages = Math.ceil(countries.length / 10);

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedCountries, setPaginatedCountries] = useState([]);
  const [searchedCountries, setSearchedCountries] = useState([]);
  const [showNotFound, setShowNotFound] = useState(false); 
  const [notFoundCountry, setNotFoundCountry] = useState('');
  const [regionFilter, setRegionFilter] = useState(''); 
  const [sortBy, setSortBy] = useState(''); 

  useEffect(() => {
    const startCountryIndex = (currentPage - 1) * 10;
    const endCountryIndex = startCountryIndex + 10;
    const currentCountries = sortedCountries.slice(startCountryIndex, endCountryIndex);

    setPaginatedCountries(currentCountries);
  }, [countries, currentPage, searchedCountries, regionFilter, sortBy]);

  const filteredCountries = searchedCountries.length > 0
    ? searchedCountries
    : countries;

  const filteredByRegion = regionFilter
    ? filteredCountries.filter((country) => country.region === regionFilter)
    : filteredCountries;

    const sortedCountries = [...filteredByRegion];

  if (sortBy === 'name') {
       sortedCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (sortBy === 'nameDesc') {
        sortedCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }





  const handleRegionFilter = (selectedRegion) => {
    
    setRegionFilter(selectedRegion);

    setCurrentPage(1);
  };

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

        setSearchedCountries(filteredCountries);

        if (filteredCountries.length === 0) {
      
      setShowNotFound(true);
     
      setNotFoundCountry(searchQuery);
    } else {
      
      setShowNotFound(false);
      setNotFoundCountry(''); 
    }
  };



  const handleResetSearch = () => {
  
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
      
        <select onChange={(e) => handleSortChange(e.target.value)}>
          <option value="">Ordenado</option>
          <option value="name">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
      </div>
      <div className={styles.divCard}>
      
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
