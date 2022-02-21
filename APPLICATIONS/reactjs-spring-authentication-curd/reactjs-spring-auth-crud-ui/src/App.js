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
import Header from "./components/header";
import Footer from "./components/footer";
import InvalidUrl from "./components/InvalidUrl";

class App extends Component {
  constructor(props) {
    super(props);
    console.log(`App.constructor()`, props);
    this.state = {
      history: createBrowserHistory(),
      userLoggedIn: false,
    };
  }

  render() {
    const history = createBrowserHistory();
    return (
      <Router history={history}>
        <div>
          <Header />
          <div className="container">
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
              <Route component={InvalidUrl} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
