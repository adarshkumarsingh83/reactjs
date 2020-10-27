import React from "react";
import { Route, Redirect } from "react-router-dom";
import LocalStorageService from "../service/LocalStorageService";

const SecurityGuard = ({ component: Component, ...rest }) => {
  console.log("SecurityGuard params :", rest);
  const authStatus = LocalStorageService.isCurrentUserAuthenticated();
  console.log(`auth status `, authStatus);
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
