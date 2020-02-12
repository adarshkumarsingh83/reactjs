import React from "react";

class CalClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onClickIncrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  onClickDecrement = () => {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  };

  onClickReset = () => {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Class Component {this.state.count}</h1>
        <div>
          <label>increment</label>&nbsp;
          <button onClick={this.onClickIncrement}>incrmented</button>
        </div>
        <br />
        <div>
          <label>decrement</label>&nbsp;
          <button onClick={this.onClickDecrement}>decrement</button>
        </div>
        <br />
        <div>
          <label>rest</label>&nbsp;
          <button onClick={this.onClickReset}> rest </button>
        </div>
      </div>
    );
  }
}

export default CalClassComponent;
