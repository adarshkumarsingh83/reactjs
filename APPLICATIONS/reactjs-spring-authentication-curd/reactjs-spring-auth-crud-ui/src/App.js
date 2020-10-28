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
    console.log(`App.constructor()`);
  }

  render() {
    return (
      <div className="container">
        <Router>
          <div className="alert alert-primary " role="alert">
            <h4 className="display-5 center">Espark Innovation Labs</h4>
          </div>
          <Switch >
            <Route path="/login" component={LoginComponent} />

            <SecurityGuard path="/" component={ListEmployeeComponent} />

            <SecurityGuard
              path="/employees-list"
              component={ListEmployeeComponent}
            />
            <SecurityGuard
              path="/add-employee"
              component={AddEmployeeComponent}
            />
            <SecurityGuard
              path="/edit-employee"
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
