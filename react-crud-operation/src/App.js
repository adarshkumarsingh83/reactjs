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
               <div className="col-md-6">
                 <h1 className="text-center">
                   React Employee Application
                 </h1>
                 <Switch>
                   <Route path="/" exact component={ListEmployeeComponent} />
                   <Route path="/employees-list" component={ListEmployeeComponent} />
                   <Route path="/add-employee" component={AddEmployeeComponent} />
                   <Route path="/edit-employee" component={EditEmployeeComponent} />
                 </Switch>
               </div>
             </Router>
           </div>
         );
       }
  }

export default App  
  
ReactDOM.render(<App/>, document.getElementById("root"));