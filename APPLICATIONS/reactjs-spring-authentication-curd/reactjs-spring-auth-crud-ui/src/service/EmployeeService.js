import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";

class EmloyeeService {
  static fetchEmployee() {
    return axios.get(EMPLOYEE_API_BASE_URL + "s");
  }

  static fetchEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  static deleteEmployee(employeeId) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  static addEmployee(employee) {
    return axios.post("" + EMPLOYEE_API_BASE_URL, employee);
  }

  static editEmployee(employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employee.id, employee);
  }
}

export default EmloyeeService;
