import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PageSpinner from "./components/PageSpinner";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuthContext } from "./contexts/authContext";
import Index from "./pages";
import Distributors from "./pages/distributors";
import Lakshan from "./pages/lakshan";
import Login from "./pages/login";
import Manufacturers from "./pages/manufacturers";
import Map from "./pages/map";
import Publish from "./pages/publish";
import Query from "./pages/query";
import Signup from "./pages/signup";
import Jing from "./pages/jing";
import Eleanor from "./pages/eleanor";
import Eugene from "./pages/eugene";

const App = () => {
  const { getUser, isLoading } = useAuthContext();

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoading) return <PageSpinner />;

  return (
    <Switch>
      <ProtectedRoute path="/admin-query">
        <Query />
      </ProtectedRoute>
      <ProtectedRoute path="/admin-publish">
        <Publish />
      </ProtectedRoute>
      <ProtectedRoute path="/manufacturers">
        <Manufacturers />
      </ProtectedRoute>
      <ProtectedRoute path="/distributors">
        <Distributors />
      </ProtectedRoute>
      <ProtectedRoute path="/map">
        <Map />
      </ProtectedRoute>
      <Route path="/data-capture-and-transmission">
        <Lakshan />
      </Route>
      <Route path="/data-aggregation-and-management">
        <Jing />
      </Route>
      <Route path="/investment-analysis-model">
        <Eleanor />
      </Route>
      <Route path="/user-experience">
        <Eugene />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Index />
      </Route>
    </Switch>
  );
};

export default App;
