import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Auth } from './reducers/Auth';
import { Ping } from './reducers/Ping';
const rootReducer = combineReducers({ Auth, Ping });

export default createStore(rootReducer, applyMiddleware(thunk));
