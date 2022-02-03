import {combineReducers, createStore } from 'redux'
import appReducer from './app-reducer';


  
  let store = createStore(appReducer);
  
  export default store; 
