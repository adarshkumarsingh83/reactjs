import React, { Component } from "react";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    console.log("LoginComponent constructor");
  }

  render() {
    return (
      <div>
        <h1>login</h1>
      </div>
    );
  }
}

export default LoginComponent;
