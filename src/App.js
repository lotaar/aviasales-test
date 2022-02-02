import logo from "../src/assets/images/Logo.svg";
import "./App.css";
import Filters from "./components/Filters/Filters";
import Tabs from "./components/Tabs/Tabs";
import Tickets from "./components/Tickets/Tickets";

function App() {
  return (
    <div className="wrap">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="container">
        <Filters />
        <div className="results">
          <Tabs />
          <Tickets />
        </div>
      </div>
    </div>
  );
}

export default App;
