import React from "react";
import LifeCycleChild from "./LifeCycleChild";
class LifeCycleParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "parent"
    };
    console.log("LifeCycleParent constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleParent getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("LifeCycleParent componentDiMount");
  }

  render() {
    console.log("LifeCycleParent render");
    return (
      <div>
        <h1>COMPONENT MOUNTING LIFE CYCLE TEST {this.state.name}</h1>
        <LifeCycleChild />
      </div>
    );
  }
}

export default LifeCycleParent;
