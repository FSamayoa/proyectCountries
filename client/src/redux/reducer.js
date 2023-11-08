import { ALL_COUNTRIES, COUNTRY_DETAILS } from "./actionTypes";

const initialState = {
  countries: [],
  error: null,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        error: null,
      };
    case COUNTRY_DETAILS:
      return {
        ...state,
        countryDetails: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default reducer;
