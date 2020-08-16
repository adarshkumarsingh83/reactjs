import React, { Component } from "react";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("ChildComponent render()");
    return <h1>{this.props.name}</h1>;
  }
}

export default ChildComponent;
