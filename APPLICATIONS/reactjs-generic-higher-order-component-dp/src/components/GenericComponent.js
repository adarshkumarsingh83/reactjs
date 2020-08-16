import React from "react";
import HOComponent from "./HOComponent";

class GenericComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <br />
        <br />
        <h1>
          {this.props.name} Count {this.props.count}
        </h1>
        <h2>Start {this.props.stars}</h2>
        <br />
        <div>
          <label>Enter the Name</label>&nbsp;
          <input type="text" />
        </div>
        <br />
        <br />
        <div>
          <label>Comments:</label>&nbsp;
          <textarea />
        </div>
        <br />
        <br />
        <button onClick={this.props.countSubmit}>submit </button>
      </React.Fragment>
    );
  }
}

export default HOComponent(GenericComponent);
