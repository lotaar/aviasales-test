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
  console.log(tabs)
  return (
    <div className="wrap">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="container">
        <Filters />
        <div className="results">
          <Tabs tabs={tabs}/>
          <Tickets tickets={tickets}/>
        </div>
      </div>
    </div>
  );
}

export default App;
