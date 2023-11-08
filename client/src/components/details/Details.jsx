import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryData } from '../../redux/actions';
import axios from "axios";
import styles from "../details/Details.module.css"

function Details() {
  const [countryDetail, setCountryDetail] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams(); 

  useEffect(() => {
    axios(`http://localhost:3001/countries/${id}`)
      .then(({ data }) => {

        if (data.nombre) {
          setCountryDetail(data);
        } else {
          window.alert('No existe ese país');
        }
      })
      .catch((error) => {
        console.error('Error al cargar los datos del país', error);
      });
  }, [id]);

  if (!countryDetail) {
    return <div>Cargando...</div>;
  }

  return (
    <div className={styles.container}>
      <hr></hr>
      <div className={styles.card}>
        <img className={styles.image} src={countryDetail.image} alt={countryDetail.nombre} />
        <div>
          <h2>Pais: {countryDetail.nombre}</h2>
          <h3>Capital: {countryDetail.capital}</h3>
          <h4>Continente: {countryDetail.region}</h4>
          <h4>Idiomas: {countryDetail.languages}</h4>
          <h4>Poblacion: {countryDetail.poblacion} personas</h4>
          <a href={countryDetail.maps} target="_blank">
            -Ubicacion en maps-
          </a>
        </div>
      </div>
      <h4>Actividades para realizar en el destino: </h4>
      <div className={`${styles.cardActividades} ${styles.textoActividades}`}>
        <ul>
          {Array.isArray(countryDetail?.Activities) ? (
            countryDetail?.Activities.map((activity) => (
              <div key={activity.id}>
                
                <li>Actividad: {activity.name}</li>
                <li>Dificultad: {activity.dificultad}</li>
                <li>Duracion: {activity.duracion}</li>
                <li>Temporada: {activity.temporada}</li>
                <hr></hr>
              </div>
            ))
          ) : (
            <li>No activities available.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Details;


