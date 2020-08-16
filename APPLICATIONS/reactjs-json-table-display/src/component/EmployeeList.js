import React from "react";
import EmployeesJson from "../store/EmployeesJson";
import EmployeeDataService from "../services/EmployeeDataService";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDetails = employeeId => {
    console.log(`getDetails() ${employeeId}`);
    var employee = EmployeeDataService.getEmployee(employeeId);
    console.log(
      `getDetails() 
        ${employee.id}
        ${employee.firstName}
        ${employee.lastName}
        ${employee.email}
        ${employee.age} `
    );
  };

  updateEmployee = employee => {
    console.log(
      `editEmployee() 
        ${employee.id}
        ${employee.firstName}
        ${employee.lastName}
        ${employee.email}
        ${employee.age} `
    );
    EmployeeDataService.updateEmployee(employee.id, employee);
  };

  deleteEmployee = employeeId => {
    console.log("deleteEmployee() " + employeeId);
    EmployeeDataService.deleteEmployee(employeeId);
  };

  render() {
    return (
      <center>
        <div>
          <h1>Employee List</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>firstName</th>
                <th>laastName</th>
                <th>email</th>
                <th>age</th>
                <th>Details</th>
                <th>Edit Operation</th>
                <th>Delete Operation</th>
              </tr>
            </thead>
            <tbody>
              {EmployeesJson.map(employee => {
                return (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>{employee.age}</td>
                    <td>
                      <button onClick={() => this.getDetails(employee.id)}>
                        Details
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.updateEmployee(employee)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button onClick={() => this.deleteEmployee(employee.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </center>
    );
  }
}

export default EmployeeList;
