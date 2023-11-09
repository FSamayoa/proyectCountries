import { ALL_COUNTRIES,} from "./actionTypes";

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
   

    default:
      return state;
  }
};

export default reducer;
