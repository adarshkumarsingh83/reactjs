import React from "react";
import Personal from "./Personal";
import Public from "./Public";
import Contact from "./Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <Router>
        <br />
        <br />
        <br />
        <div>
          <Link to="/personal">PERSONAL</Link>
          <br />
          <Link to="/public">PUBLIC</Link>
          <br />
          <Link to="/contact">CONTACT</Link>
          <br />
          <Switch>
            <Route path="/personal" component={Personal} />
            <Route path="/public" component={Public} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Home;
