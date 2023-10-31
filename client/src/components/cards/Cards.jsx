import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions'; 
import Card from '../card/Card';


function Cards() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    // Realizar la solicitud para obtener la lista de países
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div>
      {countries.map((country) => (
        <Card key={country.id} country={country} />
      ))}
    </div>
  );
}

export default Cards;