class EmployeeDataService {
  static saveEmpmloyee = employee => {
    console.log(`saveEmpmloyee ${employee.empId}`);
    localStorage.setItem(employee.empId, employee);
  };

  static getEmployee = empId => {
    console.log(`getEmployee ${empId}`);
    var employee = JSON.parse(localStorage.getItem(empId));
    console.log(`getEmployee ${employee}`);
    return employee;
  };

  static updateEmployee = (empId, employee) => {
    console.log(`updateEmployee ${empId}`);
    localStorage.setItem(empId, JSON.stringify(employee));
  };

  static deleteEmployee = empId => {
    console.log(`deleteEmployee ${empId}`);
    localStorage.removeItem(empId);
  };
}
export default EmployeeDataService;
