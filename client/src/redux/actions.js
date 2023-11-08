import { ALL_COUNTRIES } from "./actionTypes";
import axios from 'axios';


export const loadCountries = (countries) => ({
  type: ALL_COUNTRIES,
  payload: countries,
});


export const getCountries = () => {
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


  export const getCountryDetail = (countryCode) => {
    return (dispatch) => {
      axios.get(`http://127.0.0.1:3001/countries/`)
        .then((response) => {
         
          dispatch({ type: 'COUNTRY_DETAILS', payload: response.data });
        })
        .catch((error) => {
         
          console.error('Error al obtener datos del país:', error);
        });
    };
  };



  export const createActivity = async (activityData) => {
    try {
        const response = await axios.post('/post', activityData);
        return response.data; 
    } catch (error) {
        throw error; 
    }
};