import React from "react";
import InputComponent from "./InputComponent";

class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.formComponentRef = React.createRef();
  }

  setFocusToInput = () => {
    this.formComponentRef.current.focusInput();
  };

  render() {
    return (
      <React.Fragment>
        <InputComponent ref={this.formComponentRef} formComponentRef />
        &nbsp;
        <button onClick={this.setFocusToInput}>FOCUS INPUT</button>
      </React.Fragment>
    );
  }
}

export default FormComponent;
