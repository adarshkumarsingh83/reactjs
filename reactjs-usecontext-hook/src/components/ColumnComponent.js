import React from "react";

const ColumnComponent = props => {
  return (
    <React.Fragment>
      <ul>
        <h3>
          {props.user.id} &nbsp;&nbsp;
          {props.user.firstName} &nbsp;&nbsp;
          {props.user.lastName}&nbsp;&nbsp;
          {props.user.email}&nbsp;&nbsp;
          {props.address[props.user.id].city}&nbsp;&nbsp;
          {props.address[props.user.id].country}&nbsp;&nbsp;
        </h3>
      </ul>
    </React.Fragment>
  );
};

export default ColumnComponent;
