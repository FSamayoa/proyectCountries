import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions'
import Card from '../card/Card';
import Pages from '../PageNumbers/Pages'
import Searchbar from '../searchbar/Searchbar'
import styles from "../cards/Cards.module.css"

function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [actualPage, setActualPage] = useState(1);
  const [paginaCountries, setPaginaCountries] = useState([]);
  const [busquedaCountries, setBusquedaCountries] = useState([]);
  const [regionFilter, setRegionFilter] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [notFound, setNotFound] = useState(false);
 
  const findCountries = busquedaCountries.length > 0
    ? busquedaCountries
    : countries;
  const filterByRegion = regionFilter
    ? findCountries.filter((country) => country.region === regionFilter)
    : findCountries;
  const sectionCountries = [...filterByRegion];

  useEffect(() => {
    dispatch(getCountries());
    const initialCountry = (actualPage - 1) * 10;
    const finalCountry = initialCountry + 10;
    const listCountries = sectionCountries.slice(initialCountry, finalCountry);
    setPaginaCountries(listCountries);
  }, [dispatch, countries, actualPage, busquedaCountries, regionFilter, orderBy]);


  if (orderBy === 'name') {
    sectionCountries.sort((a, b) => a.nombre.localeCompare(b.nombre));
  } else if (orderBy === 'nameDesc') {
    sectionCountries.sort((a, b) => b.nombre.localeCompare(a.nombre));
  }


  const handlePageChange = (pageNumber) => {
    setActualPage(pageNumber);
  };

  const handleRegionFilter = (Region) => {
    setRegionFilter(Region);
    setActualPage(1);
  };

  const handleSortChange = (Sort) => {
    setOrderBy(Sort);
  };

  const handleReset = () => {
    setBusquedaCountries([]);
  };

  const handleSearch = (inputSearch) => {
    const inputCountries = countries.filter((country) =>
      country.nombre.toLowerCase().includes(inputSearch.toLowerCase())
    );

    setBusquedaCountries(inputCountries);

    if (inputCountries.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  };


  return (
    <div>
      <div>
        <Searchbar onSearch={handleSearch} onReset={handleReset} />
        {notFound && <p>El país no se encontró.</p>}
      </div>
      <div>
        <button onClick={() => handleRegionFilter('')}>All</button>
        <button onClick={() => handleRegionFilter('Africa')}>Africa</button>
        <button onClick={() => handleRegionFilter('Americas')}>America</button>
        <button onClick={() => handleRegionFilter('Asia')}>Asia</button>
        <button onClick={() => handleRegionFilter('Europe')}>Europa</button>
        <button onClick={() => handleRegionFilter('Oceania')}>Oceania</button>

        <select onChange={(event) => handleSortChange(event.target.value)}>
          <option value="">Ordenado</option>
          <option value="name">A-Z</option>
          <option value="nameDesc">Z-A</option>
        </select>
      </div>
      <div className={styles.divCard}>

        {sectionCountries.length > 0 ? (
          paginaCountries.map((country) => (
            <Card key={country.id} country={country} />
          ))
        ) : (
          <p>No se encontraron países que cumplan con los filtros seleccionados.</p>
        )}
      </div>
      <Pages
        totalPages={Math.ceil(sectionCountries.length / 10)}
        current={actualPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cards;
