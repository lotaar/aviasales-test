import {applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension'
import thunk from 'redux-thunk';
import appReducer from './app-reducer';


  
  let store = createStore(appReducer, composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk)));
  
  export default store; 
