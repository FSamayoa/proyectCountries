import * as actionTypes from "./actionTypes";

  const initialState = {
    countries: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_COUNTRIES':
        return {
          ...state,
          countries: action.payload,
          error: null,
        };
      case 'SET_ERROR':
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  