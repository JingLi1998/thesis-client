import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

type Props = {
  children: React.ReactNode;
  path: string;
};

const ProtectedRoute = ({ children, path }: Props) => {
  const { user } = useAuthContext();

  return user ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default ProtectedRoute;
