import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <label> Class Component</label>&nbsp;
        <button onClick={this.handleCount}>
          current count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;
