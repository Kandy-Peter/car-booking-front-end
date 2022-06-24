// import logger from 'redux-logger';
import { combineReducers, createStore } from 'redux';
// import thunk from 'redux-thunk';
import reservationReducers from './Reservations/reservation';

const reducer = combineReducers({
  allReservation: reservationReducers,
});
/* eslint-disable no-underscore-dangle */
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
export default store;
// applyMiddleware(logger, thunk))
