import * as actionTypes from "./actionTypes";
import axios from 'axios';


export const loadCountries = (countries) => ({
  type: 'LOAD_COUNTRIES',
  payload: countries,
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  payload: error,
});

export const fetchCountries = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:3001/countries')
      .then((response) => {
        dispatch(loadCountries(response.data));
      })
      .catch((error) => {
        dispatch(setError(error));
      });
  };
};


  export const fetchCountryData = (countryCode) => {
    return (dispatch) => {
      axios.get(`http://127.0.0.1:3001/countries/`)
        .then((response) => {
          // Una vez que los datos se han recibido con éxito, despacha una acción para almacenarlos en el estado global
          dispatch({ type: 'SET_COUNTRY_DATA', payload: response.data });
        })
        .catch((error) => {
          // Manejo de errores si es necesario
          console.error('Error al obtener datos del país:', error);
        });
    };
  };



  export const createActivity = async (activityData) => {
    try {
        const response = await axios.post('/post', activityData);
        return response.data; // Puedes devolver los datos de la actividad creada si es necesario
    } catch (error) {
        throw error; // Lanzar el error para manejarlo en el componente
    }
};