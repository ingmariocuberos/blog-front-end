import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import { authReducer, registerReducer } from "../reducers/authReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: registerReducer
});

export const store = createStore(
                                reducers, 
                                composeEnhancers(applyMiddleware(thunk)));