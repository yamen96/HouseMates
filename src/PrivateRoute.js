import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getEmail } from "./Selectors/authSelector";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(getEmail).length > 1;
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={"/signin"} />
      }
    />
  );
};

export default PrivateRoute;
