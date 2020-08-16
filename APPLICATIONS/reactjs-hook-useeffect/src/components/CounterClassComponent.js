import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount = () => {
    document.title = `Count class ${this.state.count}`;
  };

  componentDidUpdate = (preProps, prevState) => {
    document.title = `Count class ${this.state.count}`;
  };

  onClickIncrement = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  onClickDecrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <button onClick={this.onClickIncrement}>Increment Count</button>
        <button onClick={this.onClickDecrement}>Decrement Count</button>
      </React.Fragment>
    );
  }
}

export default CounterClassComponent;
