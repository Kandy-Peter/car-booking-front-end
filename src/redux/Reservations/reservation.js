import { getLocalStorage } from '../../logics/localStore';
// Action Types
const FETCH_DATA = 'FETCH_DATA';
const DELETE_DATA = 'DELETE_DATA';
const FETCH_CAR = 'FETCH_CAR';
const DELETE_CAR = 'DELETE_CAR';
const ADD_CAR = 'ADD_CAR';

// Initial State
const initialState = {
  reservation: [],
  cars: [],
};
// Actions
export const setData = (reservations) => ({
  type: FETCH_DATA,
  payload: reservations,
});

export const deleteData = (id) => ({
  type: DELETE_DATA,
  payload: id,

});
export const setCars = (cars) => ({
  type: FETCH_CAR,
  payload: cars,

});
export const deleteCar = (id) => ({
  type: DELETE_CAR,
  payload: id,

});
export const addCar = (car) => ({
  type: ADD_CAR,
  payload: car,

});
// reducer

const reservationReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        reservation: action.payload.filter(
          (item) => item.user_id.toString() === getLocalStorage().user_id,
        ),
      };
    case DELETE_DATA:

      return {
        ...state,
        reservation: state.reservation.filter((item) => item.id !== action.payload),
      };
    case FETCH_CAR:
      return {
        ...state,
        cars: action.payload,
      };
    case DELETE_CAR:

      return {
        ...state,
        cars: state.cars.filter((item) => item.id !== action.payload),
      };
    case ADD_CAR:
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    default:
      return state;
  }
};

export default reservationReducers;
