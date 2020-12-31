import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ping } from './actions/Ping';

const rootReducer = combineReducers({ ping });

export default createStore(rootReducer, applyMiddleware(thunk));
