package com.espark.adarsh.service;

import com.espark.adarsh.entity.Employee;
import com.espark.adarsh.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.LinkedList;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = new LinkedList<>();
        this.employeeRepository.findAll().stream().forEach(employee -> {
            employeeList.add(employee);
        });
        return employeeList;
    }

    public Employee getEmployee(Long id) {
        return this.employeeRepository.findById(id).get();
    }

    public Employee postEmployee(Employee employee) {
        return this.employeeRepository.save(employee);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        if (this.employeeRepository.existsById(id)) {
            return this.employeeRepository.save(employee);
        }
        return null;
    }

    public Employee deleteEmployee(Long id) {
        Employee employee = this.employeeRepository.findById(id).get();
        if (employee != null) {
            this.employeeRepository.deleteById(id);
            return employee;
        } else {
            return null;
        }
    }
}
