import React from "react";
const CustomComponentForToast = ({ message, closeToast }) => {
  return (
    <h3>
      {message}
      <br />
      <button onClick={closeToast}>CLOSE CUSTOM TOAST</button>
    </h3>
  );
};

export default CustomComponentForToast;
