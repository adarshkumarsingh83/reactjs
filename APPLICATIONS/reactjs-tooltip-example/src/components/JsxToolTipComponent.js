import React, { Component } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

class JsxToolTipComponent extends Component {
  jsx = data => {
    return (
      <span>
        <h3>{data}</h3>
      </span>
    );
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <Tippy content={this.jsx("espark jsx tool tip")}>
          <button>TOOL TIP BUTTON </button>
        </Tippy>
      </div>
    );
  }
}

export default JsxToolTipComponent;
