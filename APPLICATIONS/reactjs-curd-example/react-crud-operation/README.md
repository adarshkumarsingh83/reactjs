# React Crud operation 

---

### To create application
* $ create-react-app <'appliation-name'>

### To install dependent lib 
* $ npm install axios --save 
* $ npm install node-gyp --save
* $ npm install rest --save 
* $ npm install react-router-dom --save 
* $ npm install typescript --save 
* $ npm install bootstrap jquery propper propper.js --save


### import the bootstrap in index.js
* proj/src/index.js
```
# add below import statement in index.js 

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
```


### Develop a http service which will interact with server 
```
import axios from 'axios';
const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/employee';
class RestApiServices{
    static fetchEmployee() {
        return axios.get(EMPLOYEE_API_BASE_URL+"s");
    }
    static fetchEmployeeById(employeeId) {
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    static deleteEmployee(employeeId) {
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
    static addEmployee(employee) {
        return axios.post(""+EMPLOYEE_API_BASE_URL, employee);
    }
    static editEmployee(employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employee.id, employee);
    }
}
export default RestApiServices;
```
### handle post calls 
```
import React, { Component } from 'react'

import RestApiServices from "../services/RestApiServices";

class AddEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            message: null
        }
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let user = { firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, age: this.state.age };
        RestApiServices.addEmployee(user)
            .then(res => {
                this.setState({ message: 'Employee added successfully.' });
            }).catch(error => {
                this.setState({ message: 'Employee addding operation is failed ' });
                console.log(error);
            }).finally(()=>{
                console.log(`save operation call completed`);
                this.props.history.push('/employees-list');
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }



    render() {
        return (
            <div>
                {this.state.message}
                <h2 className="text-center">Add User</h2>
                <form>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                </form>
            </div>
        );
    }
}
export default AddEmployeeComponent;
```

### handle get and delete call 
```
import React, { Component } from 'react'
import RestApiServices from "../services/RestApiServices";

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            message: null
        }
    }

    componentDidMount = () => {
        this.reloadEmployeeList();
    }

    reloadEmployeeList = () => {
        RestApiServices.fetchEmployee()
            .then((res) => {
                this.setState({ message: 'Employee fetch operation is successfull ' });
                console.log(res.data)
                this.setState({ employees: res.data })
            }).catch(error => {
                this.setState({ message: 'Employee fetch operation is failed ' });
                console.log(error);
            }).finally(()=>{
                console.log(`fetch operation call completed`);
                
            });  
    }

    deleteEmployee = (id) => {
        RestApiServices.deleteEmployee(id)
            .then(res => {
                this.setState({ message: 'Employee deleted successfully.' });
                this.setState({ employees: this.state.employees.filter(employee => employee.id !== employee) });  
            }).catch(error => {
                this.setState({ message: 'Employee deleted operation is failed ' });
                console.log(error);
            }).finally(()=>{
                console.log(`deleted operation call completed`);
                this.reloadEmployeeList();
                this.props.history.push('/employees-list');
            });    
            
    }

    editEmployee = (id, employee) => {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-employee');
    }

    addEmployee = () => {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                {this.state.message}
                <h2 className="text-center">Employee Details</h2>
                <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.addEmployee()}> Add User</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>operations</th>
                            <th>operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                         <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.age}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteEmployee(employee.id)}> Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editEmployee(employee.id, employee)} style={{ marginLeft: '20px' }}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}
export default ListEmployeeComponent;
```

### handle put call 
```
import React, { Component } from 'react'


import RestApiServices from "../services/RestApiServices";

class EditEmployeeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            age: ''
        }
    }

    componentDidMount = () => {
        this.loadEmployee();
    }

    loadEmployee = () => {
        RestApiServices.fetchEmployeeById(window.localStorage.getItem("id"))
            .then((res) => {
                let employee = res.data;
                this.setState({ message: 'Employee fetch operation is successfully ' });
                this.setState({
                    id: employee.id,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email,
                    age: employee.age
                })
            }).catch(error => {
                this.setState({ message: 'Employee fetch operation is failed ' });
                console.log(error);
            }).finally(()=>{
                console.log(`fetch operation call completed`);
            });
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = { id: this.state.id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, age: this.state.age };
        RestApiServices.editEmployee(employee)
            .then(res => {
                this.setState({ message: 'Employee edited successfully.' });
            }).catch(error => {
                this.setState({ message: 'Employee edited operation is failed ' });
                console.log(error);
            }).finally(()=>{
                console.log(`edited operation call completed`);
                this.props.history.push('/employees-list');
            });
    }

    render() {
        return (
            <div>
                {this.state.message}
                <h2 className="text-center">Edit User</h2>
                <form>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Age:</label>
                        <input type="number" placeholder="age" name="age" className="form-control" value={this.state.age} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditEmployeeComponent;
```
### app component 
```
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
```


### To Start Application
* $ cd <'appliation-name'>

* $ npm run build 
* $ npm start

### Applicaton url
* http://localhost:3000