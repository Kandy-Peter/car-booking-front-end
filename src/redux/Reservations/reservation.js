// Action Types
const FETCH_DATA = 'FETCH_DATA';
const DELETE_DATA = 'DELETE_DATA';
const EDIT_DATA = 'EDIT_DATA';
// Initial State
const initialState = {
  reservation: [],
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
export const editData = (id) => ({
  type: EDIT_DATA,
  payload: id,

});

// reducer

const reservationReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, reservation: action.payload };
    case DELETE_DATA:

      return {
        ...state,
        reservation: state.reservation.filter((item) => item.id !== action.payload),
      };
    case EDIT_DATA:
      return {};
    default:
      return state;
  }
};

export default reservationReducers;
