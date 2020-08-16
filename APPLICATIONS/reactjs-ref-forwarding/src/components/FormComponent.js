import React from "react";

import InputComponent from "./InputComponent";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  handleSubmit = () => {
    alert(this.inputRef.current.value);
  };
  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <form onLoad={this.focusInput}>
        <br />
        <br />
        <br />
        <div>
          <InputComponent ref={this.inputRef} /> &nbsp;
        </div>
        <br />
        <button onClick={this.handleSubmit}>SUBMIT </button>
      </form>
    );
  }
}

export default FormComponent;
