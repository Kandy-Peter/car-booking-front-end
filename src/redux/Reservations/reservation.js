// import axios from 'axios';
// Action Types
const FETCH_DATA = 'FETCH_DATA';
// const Delete_DATA = 'Delete_DATA';
// Initial State
const initialState = {
  reservation: [],
};
// Actions
export const setData = (reservations) => ({
  type: FETCH_DATA,
  payload: reservations,
});
// const deleteData = (reservation) => ({
//   type: Delete_DATA,
//   payload: reservation,
// });

// reducer

const reservationReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, reservation: action.payload };
    default:
      return state;
  }
};

export default reservationReducers;
