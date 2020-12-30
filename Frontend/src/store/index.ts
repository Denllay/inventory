import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { auth } from './reducers/auth';

const rootReducer = combineReducers({ auth });

export default createStore(rootReducer, applyMiddleware(thunk));
