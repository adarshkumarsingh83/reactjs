import React from "react";

import RowComponent from "./RowComponent";

const TableComponent = props => {
  return (
    <div>
      <h1>{props.heading} USER INFORMATION </h1>
      <RowComponent />
    </div>
  );
};

export default TableComponent;
