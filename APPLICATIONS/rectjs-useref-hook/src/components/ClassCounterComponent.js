import React from "react";
class ClassCounterComponent extends React.Component {
  intervel;

  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount = () => {
    this.intervel = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + 1
      }));
    }, 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervel);
  };

  stopTicking = event => {
    clearInterval(this.intervel);
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <br />
        <button onClick={this.stopTicking}>stop counter</button>
      </div>
    );
  }
}

export default ClassCounterComponent;
