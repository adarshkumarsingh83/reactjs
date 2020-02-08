package com.espark.adarsh.web;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@org.springframework.web.bind.annotation.RestController
public class EmployeeController {

    @org.springframework.beans.factory.annotation.Autowired
    private com.espark.adarsh.services.EmployeeServices employeeServices;


    @org.springframework.web.bind.annotation.PostMapping("/employee")
    com.espark.adarsh.db.entity.Employee saveEmployee(@org.springframework.web.bind.annotation.RequestBody
                                                        com.espark.adarsh.db.entity.Employee employee) {
        return this.employeeServices.saveEmployee(employee);
    }

    @org.springframework.web.bind.annotation.PutMapping("/employee/{employeeId}")
    com.espark.adarsh.db.entity.Employee updateEmployee(
            @org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId,
            @org.springframework.web.bind.annotation.RequestBody com.espark.adarsh.db.entity.Employee employee) {
        return this.employeeServices.updateEmployee(employeeId, employee);
    }

    @org.springframework.web.bind.annotation.GetMapping("/employee/{employeeId}")
    com.espark.adarsh.db.entity.Employee Employee(@org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId) {
        return this.employeeServices.getEmployee(employeeId);
    }

    @org.springframework.web.bind.annotation.DeleteMapping("/employee/{employeeId}")
    com.espark.adarsh.db.entity.Employee deleteEmployee(@org.springframework.web.bind.annotation.PathVariable("employeeId") Long employeeId) {
        return this.employeeServices.deleteEmployee(employeeId);
    }

    @org.springframework.web.bind.annotation.GetMapping("/employees")
    java.util.List<com.espark.adarsh.db.entity.Employee> getEmployees() {
        return this.employeeServices.getEmployees();
    }
}
