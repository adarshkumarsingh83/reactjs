import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: ""
    };
  }

  componentDidMount = () => {
    document.title = `Count class ${this.state.count}`;
  };

  componentDidUpdate = (preProps, prevState) => {
    if (prevState.count !== this.state.count) {
      document.title = `Count class ${this.state.count}`;
      console.log("componentDidUpdate executed and render ");
    }
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
        <label> Enter the Name </label>&nbsp;
        <input
          type="text"
          value={this.state.name}
          onChange={event => {
            this.setState({ name: event.target.value });
          }}
        />
        <button onClick={this.onClickIncrement}>Increment Count</button>
        <button onClick={this.onClickDecrement}>Decrement Count</button>
      </React.Fragment>
    );
  }
}

export default CounterClassComponent;
