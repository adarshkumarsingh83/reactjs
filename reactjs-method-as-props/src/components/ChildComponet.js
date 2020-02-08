import React from "react";

class ChildComponet extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.wishHandler("child")}>WISH</button>
      </div>
    );
  }
}

export default ChildComponet;
