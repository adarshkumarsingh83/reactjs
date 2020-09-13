
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