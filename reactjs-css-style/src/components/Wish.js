import React from "react";
import "../style/myStyle.css";

class Wish extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styleClassName: ""
    };
  }

  render() {
    let className = this.props.styleClassName;
    return (
      <div>
        <h1 className={`${className} myFont`}>WELCOME TO THE ESPARK</h1>
      </div>
    );
  }
}

export default Wish;
