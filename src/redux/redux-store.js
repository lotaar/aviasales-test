import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import appReducer from "./app-reducer";

let store = createStore(
  appReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
);

export default store;
