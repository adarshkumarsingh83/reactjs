import React from "react";

const MyButtonComponent = (buttonText, ref) => {
  return (
    <div ref={ref}>
      <button> {buttonText} </button>
    </div>
  );
};

export default MyButtonComponent;
