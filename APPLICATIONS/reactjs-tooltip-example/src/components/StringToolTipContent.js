import React, { Component } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";

class StringToolTipContent extends Component {
  stringToolTip = data => {
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
        <Tippy content={this.stringToolTip("espark string tool tip")}>
          <button>TOOL TIP BUTTON </button>
        </Tippy>
      </div>
    );
  }
}

export default StringToolTipContent;
