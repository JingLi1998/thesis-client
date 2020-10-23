import React from "react";
import { Route, Switch } from "react-router-dom";
import Index from "./pages";
import Admin from "./pages/admin";
import Distributors from "./pages/distributors";
import Login from "./pages/login";
import Manufacturers from "./pages/manufacturers";
import Map from "./pages/map";

function App() {
  return (
    <Switch>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/manufacturers">
        <Manufacturers />
      </Route>
      <Route path="/distributors">
        <Distributors />
      </Route>
      <Route path="/map">
        <Map />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
}

export default App;
