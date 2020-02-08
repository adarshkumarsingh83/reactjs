import React from "react";

import ReactDOM from "react-dom";

const PortalComponent = () => {
  return ReactDOM.createPortal(
    <dov>
      <h1>REACT PROTAL COMPONENT </h1>
    </dov>,
    document.getElementById("portal-root")
  );
};

export default PortalComponent;
