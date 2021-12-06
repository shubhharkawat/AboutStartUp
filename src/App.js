import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header"
import Summary from './Summary'
import Team from './Team'
import Financials from './Financials'
// import Business from './Business'
// import Products from './Products'
// import Requirements from './Requirements'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Header />
      </div>
      {/* <Summary /> */}
      <Routes>
        <Route path="/" elements={<Summary />}/>
        <Route path="/Team" elements={<Team />}/>
        <Route path="/Financials" elements={<Financials />}/>
        {/* <Route path="/Business" elements={<Business />} />
        <Route path="/Products" elements={<Products />} />
        <Route path="/Requirements" elements={<Requirements />} /> */}
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
