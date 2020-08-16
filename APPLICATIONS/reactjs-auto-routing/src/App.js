import React from "react";

import "./App.css";
import Home from "./components/Home";
import Private from "./components/Private";
import Public from "./components/Public";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="col-md-6">
          <h1 className="text-center">React Push Routing Application</h1>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/private" component={Private} />
            <Route path="/public" component={Public} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
