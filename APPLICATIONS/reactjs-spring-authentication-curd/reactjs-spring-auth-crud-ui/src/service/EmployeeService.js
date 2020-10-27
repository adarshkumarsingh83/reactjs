import axios from "axios";
import LocalStorageService from "./LocalStorageService";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employee";

class EmloyeeService {
  static fetchEmployee() {
    let token = LocalStorageService.getTokenAndKey();
    console.log(`EmloyeeServic.fetchEmployee()`);
    return axios.get(EMPLOYEE_API_BASE_URL + "s", {
      headers: {
        "Content-Type": "application/json",
        "X-TOKEN": token,
      },
    });
  }

  static fetchEmployeeById(employeeId) {
    let token = LocalStorageService.getTokenAndKey();
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
      headers: {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
        },
      },
    });
  }

  static addEmployee(employee) {
    let token = LocalStorageService.getTokenAndKey();
    return axios.post("" + EMPLOYEE_API_BASE_URL, employee, {
      headers: {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
        },
      },
    });
  }

  static editEmployee(employee) {
    let token = LocalStorageService.getTokenAndKey();
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + employee.id, employee, {
      headers: {
        headers: {
          "Content-Type": "application/json",
          "X-TOKEN": token,
        },
      },
    });
  }
}

export default EmloyeeService;
