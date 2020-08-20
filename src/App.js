import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./views/Home";
import CityList from './views/CityList';
import Map from './views/Map'
import Search from './components/Search'
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' render={()=><Redirect to='/home' />} />
        <Route path="/home" component={Home} />
         <Route path="/citylist" component={CityList} />
         <Route path="/map" component={Map} />
         <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
