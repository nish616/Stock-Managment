
import React from "react";

import Nav from "./components/Nav";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import CreateStock from "./components/createStock/createStock";
import ViewStock from "./components/viewStocks/viewStocks";
import UpdateStock from "./components/updateStock/updateStock"




function App() {

  return (

    <Router>

      <div className="App">

        <Nav />

        <Route path="/create" component={CreateStock} />
        <Route path="/stocks" component={ViewStock} />
        <Route path="/update" component={UpdateStock} />

      </div>

    </Router>

  );

}



export default App;