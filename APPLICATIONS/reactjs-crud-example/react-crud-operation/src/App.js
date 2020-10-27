import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import AddEmployeeComponent from './components/AddEmployeeComponent'
import EditEmployeeComponent from './components/EditEmployeeComponent'

class App extends React.Component {

    constructor(props) {
		super(props);
		this.state = {employees: []};
	}

  render(){
       return (
           <div className="container">
             <Router>
                 <div class="alert alert-primary" role="alert">
                    <h4 class="display-3">React Employee Application</h4>
                  </div>
                 <Switch>
                   <Route path="/" exact component={ListEmployeeComponent} />
                   <Route path="/employees-list" component={ListEmployeeComponent} />
                   <Route path="/add-employee" component={AddEmployeeComponent} />
                   <Route path="/edit-employee" component={EditEmployeeComponent} />
                 </Switch>
             </Router>
           </div>
         );
       }
  }

export default App  
  
ReactDOM.render(<App/>, document.getElementById("root"));