import {applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import appReducer from './app-reducer';


  
  let store = createStore(appReducer, applyMiddleware(thunk));
  
  export default store; 
