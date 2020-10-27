import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../service/LocalStorageService";

const SecurityGuard = ({ component: Component, ...rest }) => {
  const authStatus = LocalStorageService.isCurrentUserAuthenticated();
  console.log("SecurityGuard params :");
  return (
    <Route
      {...rest}
      render={(props) =>
        authStatus ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SecurityGuard;
