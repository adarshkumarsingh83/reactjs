# reactjs use effect data fetching 

--- 


### application generation cmd 
* create-react-app reactjs-useeffect-datafetching

### To install dependent lib
* $ npm install axios --save
* $ npm install node-gyp --save
* $ npm install rest --save
* $ npm install typescript --save
* $ npm install bootstrap jquery popper --save

### import the bootstrap in index.js
* proj/src/index.js
# add below import statement in index.js 
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js';
```

### List Component 
```

import React, {useState, useEffect} from 'react';
import RestApiServices from "../services/RestApiServices";

function ListEmployeeComponent() {

    const [employees, setEmployees] = React.useState([]);

     useEffect(
         () => {
             RestApiServices.fetchEmployee()
             .then( response => {
                 console.log(response.data);
                 setEmployees(response.data);
             }).catch(error => {
                console.log(error)
            });
         }
     ,[])
  return (
      <div>
           <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(
                                employee =>
                                    <tr key={employee.id}>
                                         <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.age}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

      </div>
  )

}

export default ListEmployeeComponent;
```

### Search Component 
```

import React, {useState, useEffect} from 'react';
import RestApiServices from "../services/RestApiServices";

function SearchEmployeeComponent () {

    const [employee, setEmployee] = React.useState([]);
    const [employeeId, setEmployeeId] = React.useState();
    const [employeeIdClick, setEmployeeIdClick] = React.useState();

    useEffect(
        () => {
            RestApiServices.fetchEmployeeById(employeeIdClick)
            .then( response => {
                console.log(response.data);
                setEmployee(response.data);
            }).catch(error => {
                setEmployeeId(null);
                setEmployee({});
               console.log(error)
           });
        }
    ,[employeeIdClick])


    const handleClick = (e) =>{
        setEmployeeIdClick(employeeId)
    }

 return (
     <div>
         <div>
             <label> Search for Employee Details </label> &nbsp;
             <input type="text" value={employeeId} onChange = { e => setEmployeeId(e.target.value)} /> &nbsp;
             <button onClick={handleClick} >SEARCH EMPLOYEE </button>
         </div>
          <table className="table table-striped">
                   <thead>
                       <tr>
                            <th className="hidden">Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Age</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{employee.age}</td>
                            </tr>                           
                       }
                   </tbody>
               </table>

     </div>
 )
}

export default SearchEmployeeComponent;
```

### App Component 
```
import React from 'react';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import SearchEmployeeComponent from './components/SearchEmployeeComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
            <div class="alert alert-primary" role="alert">
              <h4 class="display-3">Application</h4>
            </div>
            <ListEmployeeComponent/>
            <SearchEmployeeComponent/>
        </div>
    </div>
  );
}

export default App;

```