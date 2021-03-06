import React from "react";

class LifeCycleChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "child"
    };
    console.log("LifeCycleChild constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleChild getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("LifeCycleChild componentDiMount");
  }

  render() {
    console.log("LifeCycleChild render");
    return (
      <div>
        <h1>COMPONENT MOUNTING LIFE CYCLE TEST {this.state.name}</h1>
      </div>
    );
  }
}

export default LifeCycleChild;
