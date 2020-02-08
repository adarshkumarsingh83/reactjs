import React from "react";

class InLineStyle extends React.Component {
  
    constructor() {
    super();
    this.myStyle = {
      color: "red",
      fontSize: "72px",
      fontStyle: "italic"
    };
  }

  render() {
    return (
      <div>
        <h1 style={this.myStyle}>WELCOME TO THE INLINE STYLE </h1>
      </div>
    );
  }
}

export default InLineStyle;
