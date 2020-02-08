import React from "react";

const InputComponent = React.forwardRef((props, ref) => {
  return (
    <React.Fragment>
      <label>ENTER THE TEXT</label> &nbsp;
      <input type="text" ref={ref} />
    </React.Fragment>
  );
});

export default InputComponent;
