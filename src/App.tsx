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
      <Route path="/lakshan">
        <Lakshan />
      </Route>
      <Route path="/jing">
        <Jing />
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
