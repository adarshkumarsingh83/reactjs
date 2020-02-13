import React from "react";

class CounterClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <label> Class Component</label>&nbsp;
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          current count : {this.state.count}
        </button>
      </div>
    );
  }
}

export default CounterClassComponent;
