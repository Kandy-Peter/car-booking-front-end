import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userReducer from './user/user';

const reducers = combineReducers({
  userReducer,
});

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;
