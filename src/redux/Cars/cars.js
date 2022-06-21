import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  cars: [],
};

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fecthCars = () => async (dispatch) => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/cars');
  const request = await response.data;
  dispatch(fetchData(request));
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
