import React from "react";
import RowComponent from "./RowComponent";
class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.heading} USER INFORMATION </h1>
        <RowComponent />
      </div>
    );
  }
}

export default TableComponent;
