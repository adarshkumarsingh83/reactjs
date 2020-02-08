import React from "react";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <label> Enter the Value </label>&nbsp;
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default InputComponent;
