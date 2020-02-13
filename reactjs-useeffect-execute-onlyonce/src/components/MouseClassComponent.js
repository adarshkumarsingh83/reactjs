import React from "react";

class MouseClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  trackMouse = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };

  componentDidMount = () => {
    console.log("componentDidMount executed");
    document.addEventListener("mousemove", this.trackMouse);
  };

  componentDidUmMount = () => {
    console.log("componentDidUmMount executed");
    document.removeEventListener("mousemove", this.trackMouse);
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>
          Class Mouse Component Response
          <br /> X cordinate = {this.state.x}&nbsp; Y cordinate = {this.state.y}
        </h1>
      </div>
    );
  }
}

export default MouseClassComponent;
