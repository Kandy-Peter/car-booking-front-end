import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers, { fecthCars } from './Cars/cars';

const reducer = combineReducers({
  reducers,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

store.dispatch(fecthCars());

export default store;
