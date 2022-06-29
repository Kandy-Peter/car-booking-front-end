import axios from 'axios';
import { carsURL } from '../../logics/urls';

const FETCH_DATA = 'FETCH_DATA';

const initialState = {
  cars: [],
};

const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const fecthCars = () => async (dispatch) => {
  const response = await axios.get(carsURL);
  const request = await response.data;
  dispatch(fetchData(request));
};

const carReducers = (state = initialState, action) => {
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

export default carReducers;
