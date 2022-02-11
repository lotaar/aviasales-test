import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../src/assets/images/Logo.svg";
import { fetchData } from "./api/api";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Tabs from "./components/Tabs/Tabs";
import Tickets from "./components/Tickets/Tickets";
import { getTickets } from "./redux/app-reducer";
import store from "./redux/redux-store";

function App(props) {
  const dispatch = useDispatch()
  useEffect(()=> {
    
    dispatch(getTickets())
  },[])
  const tickets = useSelector((state)=> state.tickets)
  const tabs = useSelector((state)=> state.tabs)
  const filters =useSelector((state)=>state.v2Filters)
  const isError = useSelector((state) => state.isError)
  console.log(tabs)
  console.log(isError)
  return (
    <div className="wrap">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="container">
        <Filters filters={filters}/>
        <div className="results">
          <Tabs tabs={tabs}/>
          {isError? <h1>Пожалуйста обновите страницу</h1> :<Tickets tickets={tickets} tabs={tabs}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
