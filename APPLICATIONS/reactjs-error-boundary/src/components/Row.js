import React from "react";

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.user.id === -1) {
      throw new Error("Not A Valid User Data");
    }
    return (
      <React.Fragment>
        <ul className="ul" id="user" key={this.props.user.id}>
          {this.props.user.id} &nbsp;&nbsp;
          {this.props.user.firstName} &nbsp;&nbsp;
          {this.props.user.lastName}&nbsp;&nbsp;
          {this.props.user.email}
        </ul>
      </React.Fragment>
    );
  }
}

export default Row;
