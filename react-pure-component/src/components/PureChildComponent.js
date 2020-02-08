import React, { PureComponent } from "react";

class PureChildComponent extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("PureChildComponent render()");
    return <h1>{this.props.name}</h1>;
  }
}

export default PureChildComponent;
