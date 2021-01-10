import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Auth } from './reducers/Auth/Auth';
import { Ping } from './reducers/Ping';
import { Inventory } from './reducers/Inventory/Inventory';
const rootReducer = combineReducers({ Auth, Ping, Inventory });

export default createStore(rootReducer, applyMiddleware(thunk));
