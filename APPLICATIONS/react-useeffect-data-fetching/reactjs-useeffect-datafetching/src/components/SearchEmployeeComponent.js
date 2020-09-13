
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