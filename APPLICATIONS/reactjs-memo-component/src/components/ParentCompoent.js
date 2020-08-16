import React from "react";
import ChildComponent from "./ChildComponent";
import MemoChildComponent from "./MemoChildComponent";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "adarsh"
    };
  }

  componentDidMount = () => {
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
        <MemoChildComponent name={this.state.name} />
      </React.Fragment>
    );
  }
}
export default ParentComponent;
