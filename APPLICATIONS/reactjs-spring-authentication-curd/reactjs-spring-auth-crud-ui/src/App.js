import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecurityGuard from "./security/SecurityGuard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import EditEmployeeComponent from "./components/EditEmployeeComponent";
import LoginComponent from "./security/LoginComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAutheticated: false,
    };
  }

  login() {
    this.setState({ isAutheticated: true });
  }

  logout() {
    this.setState({ isAutheticated: false });
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div className="alert alert-primary " role="alert">
            <h4 className="display-5 center">Espark Innovation Labs</h4>
          </div>
          <Switch>
            <Route path="/login" component={LoginComponent} />
            <SecurityGuard
              path="/"
              component={ListEmployeeComponent}
              auth={this.state.isAutheticated}
            />

            <SecurityGuard
              path="/employees-list"
              component={ListEmployeeComponent}
              auth={this.state.isAutheticated}
            />
            <SecurityGuard
              path="/add-employee"
              component={AddEmployeeComponent}
              auth={this.state.isAutheticated}
            />
            <SecurityGuard
              path="/edit-employee"
              component={EditEmployeeComponent}
              auth={this.state.isAutheticated}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
