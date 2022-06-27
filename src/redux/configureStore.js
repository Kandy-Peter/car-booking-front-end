import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers, { fecthCars } from './Cars/cars';
import uniqueCarReducer from './Cars/carDetail';

const reducer = combineReducers({
  reducers,
  uniqueCarReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fecthCars());

export default store;
