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

  changeState = event => {
    this.setState({
      name: "parent-change"
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleParent getDerivedStateFromProps");
  }

  componentDidMount() {
    console.log("LifeCycleParent componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleParent shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleParent getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleParent componentDidUpdate");
  }

  render() {
    console.log("LifeCycleParent render");
    return (
      <div>
        <h1>COMPONENT MOUNTING LIFE CYCLE TEST {this.state.name}</h1>
        <LifeCycleChild />
        <button onClick={this.changeState}>CHANGE STATE</button>
      </div>
    );
  }
}

export default LifeCycleParent;
