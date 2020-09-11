package com.espark.adarsh.web;

import com.espark.adarsh.entity.Employee;
import com.espark.adarsh.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping(value="/employees")
    public List<Employee> getAllEmployees(){
        return this.employeeService.getAllEmployees();
    }

    @GetMapping(value="/employee/{id}")
    public Employee getEmployee(@PathVariable("id")Long id){
        return this.employeeService.getEmployee(id);
    }

    @DeleteMapping(value="/employee/{id}")
    public Employee deleteEmployee(@PathVariable("id")Long id){
        return this.employeeService.deleteEmployee(id);
    }


    @PutMapping(value="/employee/{id}")
    public Employee updateEmployee(@PathVariable("id")Long id,@RequestBody Employee employee){
        return this.employeeService.updateEmployee(id,employee);
    }

    @PostMapping(value="/employee")
    public Employee postEmployee(@RequestBody Employee employee){
        return this.employeeService.postEmployee(employee);
    }
}
