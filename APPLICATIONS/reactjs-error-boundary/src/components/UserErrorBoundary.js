import React from "react";
class UserErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError = error => {
    return {
      hasError: true
    };
  };

  componentDidCatch = (error, info) => {
    console.log(`${error}  = ${info}`);
  };

  render() {
    if (this.state.hasError) {
      return (
        <React.Fragment>
          <ul className="ul" id="error">
            {this.props.user.id} &nbsp;&nbsp;
            {this.props.user.firstName} &nbsp;&nbsp;
            {this.props.user.lastName}&nbsp;&nbsp;
            {this.props.user.email} &nbsp;&nbsp;<b>INVALID USER INFORMATION </b>
          </ul>
        </React.Fragment>
      );
    } else {
      return this.props.children;
    }
  }
}

export default UserErrorBoundary;
