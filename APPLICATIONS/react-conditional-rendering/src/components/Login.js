import React from "react";
import LoginSuccess from "./LoginSucess";
import LoginFailure from "./LoginFailure";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userPwd: "",
      login: null
    };
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value
    });
  };

  onChangeUserPwd = event => {
    this.setState({
      userPwd: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.userName === this.state.userPwd) {
      this.setState({
        login: true
      });
    } else {
      this.setState({
        login: false
      });
    }
    // alert(this.state.login);
    console.log(this.state.login);
  };

  renderSuccess() {
    return <LoginSuccess />;
  }

  render() {
    return this.state.login === null ? (
      <div>
        <br />
        <br />
        <br />
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Enter User Name</label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.onChangeUserName}
            />
          </div>
          <div>
            <label>Enter User Pwd</label>
            <input
              type="password"
              value={this.state.userPwd}
              onChange={this.onChangeUserPwd}
            />
          </div>
          <button typ="submit">Login</button>
        </form>
      </div>
    ) : this.state.login === true ? (
      <LoginSuccess />
    ) : (
      <LoginFailure />
    );
  }
}

export default Login;
