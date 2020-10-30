import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { NavLink } from "react-router-dom";
import LocalStorageService from "../service/LocalStorageService";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log(`Header.constructor()`, props);
    this.state = {
      history: createBrowserHistory(),
      userLoggedIn: false,
    };
  }

  componentDidMount = () => {
    this.setState({
      userLoggedIn: LocalStorageService.isCurrentUserAuthenticated(),
    });
  };

  logout = () => {
    console.log(`App.logout()`);
    LocalStorageService.clearStorage();
    console.log("logout", this.state);
    this.state.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary " role="alert">
          <h4 className="display-5 center">Espark Innovation Labs</h4>
        </div>
        {this.state.userLoggedIn ? (
          <div>
            <nav>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              &nbsp;
              <NavLink activeClassName="active" to="/employees-list">
                Employees
              </NavLink>
              &nbsp;
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
              &nbsp;
            </nav>
            <button className="btn btn-success" onClick={this.logout}>
              logout
            </button>
          </div>
        ) : null}
      </div>
    );
  }
}
export default Header;
