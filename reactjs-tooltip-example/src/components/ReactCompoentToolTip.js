import React from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import MyButtonComponent from "./MyButtonComponent";

const ReactCompoentToolTip = () => {
  const ButtonComponent = React.forwardRef((props, ref) => {
    return MyButtonComponent(props.buttonText1, ref);
  });

  const jsx = data => {
    return (
      <span>
        <h3>{data}</h3>
      </span>
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <Tippy content={jsx("custom component tool tip")}>
        <ButtonComponent buttonText1='REACT JS CUSTOM COMPONENT FOR TOOL' />
      </Tippy>
    </div>
  );
};

export default ReactCompoentToolTip;
