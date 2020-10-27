import React from "react";
import { Route, Redirect } from "react-router-dom";

const SecurityGuard = ({ component: Component, auth, ...rest }) => {
  console.log("SecurityGuard params :", auth, rest);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default SecurityGuard;
