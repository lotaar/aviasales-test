import { useSelector } from "react-redux";
import logo from "../src/assets/images/Logo.svg";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Tabs from "./components/Tabs/Tabs";
import Tickets from "./components/Tickets/Tickets";
import store from "./redux/redux-store";

function App(props) {
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
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
