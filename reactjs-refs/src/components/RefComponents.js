import React from "react";

class RefComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTextValue: ""
    };
    this.inputRef = React.createRef();
  }

  handleSubmit = event => {
    alert(`${this.inputRef.current.value}`);
  };

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <label> Enter the Value </label> &nbsp;
        <input type="text" ref={this.inputRef} />
        <br />
        <br />
        <button onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
}

export default RefComponents;
