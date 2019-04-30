import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./components/create";
import List from "./components/list";
import Edit from "./components/edit";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Nav from "./components/nav";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />

       
        <Switch>
          <Route exact path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/index" component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
