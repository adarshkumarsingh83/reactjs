import React, { Component } from "react";
import LocalStorageService from "../service/LocalStorageService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: "", userPwd: "" };
    console.log("LoginComponent constructor");
  }

  login = (e) => {
    e.preventDefault();
    console.log(``, this.state.userName, this.state.userPwd);
    if (this.state.userName === this.state.userPwd) {
      LocalStorageService.saveInStorage({
        userName: this.state.userName,
        isAuthenticated: true,
        isAdmin: true,
        isUser: false,
        isGuest: false,
      });
      this.props.history.push("/");
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="col-md-6 offset-md-3 mt-5">
            <div className="alert alert-info">ESPARK LOGIN APPLICATION</div>
            <div className="card">
              <h4 className="card-header">Login</h4>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="exampleInputName">User Name </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="nameHelp"
                      name="userName"
                      value={this.state.userName}
                      onChange={this.onChange}
                      required
                    />
                    <small id="nameHelp" className="form-text text-muted">
                      Enter the Name Field Value
                    </small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      aria-describedby="pwdHelp"
                      name="userPwd"
                      value={this.state.userPwd}
                      onChange={this.onChange}
                      required
                    />
                    <small id="pwdHelp" className="form-text text-muted">
                      Enter the Password Field Value
                    </small>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.login}
                  >
                    login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
