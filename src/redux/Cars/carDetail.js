import axios from 'axios';

const FETCH_UNIQUE_CAR = 'FETCH_UNIQUE_CAR';

const initialState = [];

export const getCar = (payload) => ({
  type: FETCH_UNIQUE_CAR,
  payload,
});

export const getUniqueCar = (id) => async (dispatch) => {
  const response = await axios.get(`http://127.0.0.1:4000/api/v1/cars/${id}`);
  const request = await response.data;
  dispatch(getCar(request));
};

const uniqueCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UNIQUE_CAR:
      return action.payload;
    default:
      return state;
  }
};

export default uniqueCarReducer;
