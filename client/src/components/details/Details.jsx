import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountryData } from '../../redux/actions';
import axios from "axios";

function Details() {
  const [countryDetail, setCountryDetail] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams(); /* Obtén el id del país, probablemente utilizando useParams() o algo similar */

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
    <div>
      <img src={countryDetail.image} alt={countryDetail.nombre} />
      <h2>Pais: {countryDetail.nombre}</h2>
      <h3>Capital: {countryDetail.capital}</h3>
      <h4>Continente: {countryDetail.region}</h4>
      <h4>Idiomas: {countryDetail.languages}</h4>
      <h4>Poblacion: {countryDetail.poblacion} personas</h4>
      <a href={countryDetail.maps} target="_blank">
      -Ubicacion en maps-
      </a>
      <h4>Actividades para realizar en el destino: </h4>
      <ul>
        {Array.isArray(countryDetail?.Activities) ? (
          countryDetail?.Activities.map((activity) => (
            <div key={activity.id}>
            <li>Actividad: {activity.name}</li>
            <li>Dificultad: {activity.dificultad}</li>
            <li>Duracion: {activity.duracion}</li>
            <li>Temporada: {activity.temporada}</li>
            <br />
          </div>
          ))
        ) : (
          <li>No activities available.</li>
        )}
      </ul>
    </div>
  );
}

export default Details;


