// import { useParams } from "react-router-dom";
// import { useSelector } from 'react-redux';

// function Details() {
    
//     const { id } = useParams()
//     const countries = useSelector((state) => state.countries);
    
    
//     const country = countries.find((c) => c.id === id);
//     console.log("Country:", country);

//     if (!country) {
//         return <div>Cargando...</div>;
//     }
//     return (
//         <div >
//             <img src={country?.image} alt={country?.nombre} />
//             <h2>Pais: {country?.nombre}</h2>
//             <h3>Capital: {country?.capital}</h3>
//             <h4>Continente: {country?.region}</h4>
//             <h4>Idiomas: {country?.languages}</h4>
//             <h4>Poblacion: {country?.poblacion}</h4>
//             <h4>Ubicacion: {country?.maps}</h4>
//             <h4>Activities: {country?.activities}</h4>
//             <ul>
//                 {country?.activities.map((activity, index) => (
//                     <li key={index}>{activity.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Details

import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
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
      <h4>-Ubicacion en maps-</h4>
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
