import {Link} from 'react-router-dom'
import React from 'react';
import styles from "../card/Card.module.css"

function Card({ country }) {
  return (
    <div className={styles.divCard} key={country.id}>
      <Link className={styles.link} to={`/countries/${country.id}`}>
        <img className={styles.imgCard} src={country.image} alt={country.nombre} />
        <h3>{country.nombre}</h3>
        <p>{country.region}</p>
      </Link>
    </div>
  );
}

export default Card;