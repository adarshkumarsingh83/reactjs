import "./App.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, Switch } from "react-router";
import SecurityGuard from "./security/SecurityGuard";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from "./components/AddEmployeeComponent";
import EditEmployeeComponent from "./components/EditEmployeeComponent";
import LoginComponent from "./security/LoginComponent";
import { createBrowserHistory } from "history";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`App.constructor()`, props);
  }

  render() {
    const history = createBrowserHistory();
    return (
      <div className="container">
        <Router history={history}>
          <div className="alert alert-primary " role="alert">
            <h4 className="display-5 center">Espark Innovation Labs</h4>
          </div>
          <Switch>
            <Route path="/login" component={LoginComponent} />

            <SecurityGuard
              exact
              path="/"
              history={history}
              component={ListEmployeeComponent}
            />

            <SecurityGuard
              exact
              path="/employees-list"
              history={history}
              component={ListEmployeeComponent}
            />
            <SecurityGuard
              exact
              path="/add-employee"
              history={history}
              component={AddEmployeeComponent}
            />
            <SecurityGuard
              exact
              path="/edit-employee"
              history={history}
              component={EditEmployeeComponent}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
