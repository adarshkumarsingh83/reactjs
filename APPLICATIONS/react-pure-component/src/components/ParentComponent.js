import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
import PureChildComponent from "./PureChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "adarsh"
    };
  }

  componentWillMount = () => {
    setInterval(() => {
      this.setState({
        name: "adarsh"
      });
    }, 2000);
  };

  render() {
    console.log("ParentComponent render()");
    return (
      <React.Fragment>
        <ChildComponent name={this.state.name} />
        <PureChildComponent name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default ParentComponent;
