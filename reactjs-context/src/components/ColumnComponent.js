import React from "react";

class ColumnComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul key={this.props.user.id}>
          <h3>
            {this.props.user.id} &nbsp;&nbsp;
            {this.props.user.firstName} &nbsp;&nbsp;
            {this.props.user.lastName}&nbsp;&nbsp;
            {this.props.user.email}
          </h3>
        </ul>
      </React.Fragment>
    );
  }
}

export default ColumnComponent;
