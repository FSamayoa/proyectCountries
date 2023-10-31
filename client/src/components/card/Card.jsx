import {Link} from 'react-router-dom'
import React from 'react';

function Card({ country }) {
  return (
    <div key={country.id}>
      <Link to={`/countries/${country.id}`}>
        <img src={country.image} alt={country.nombre} />
        <h2>{country.nombre}</h2>
        <p>{country.region}</p>
      </Link>
    </div>
  );
}

export default Card;