package com.espark.adarsh.services;

@org.springframework.stereotype.Service
public class EmployeeServicesImpl implements EmployeeServices {

    @org.springframework.beans.factory.annotation.Autowired
    com.espark.adarsh.db.repository.EmployeeRepository employeeRepository;

    @Override
    public com.espark.adarsh.db.entity.Employee saveEmployee(com.espark.adarsh.db.entity.Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public com.espark.adarsh.db.entity.Employee updateEmployee(Long employeeId,com.espark.adarsh.db.entity.Employee employee) {
        return this.employeeRepository.save(employee);
    }

    @Override
    public com.espark.adarsh.db.entity.Employee deleteEmployee(Long employeeId) {
         com.espark.adarsh.db.entity.Employee employee = this.getEmployee(employeeId);
         this.employeeRepository.delete(employee);
        return employee;
    }

    @Override
    public com.espark.adarsh.db.entity.Employee getEmployee(Long employeeId) {
        java.util.Optional<com.espark.adarsh.db.entity.Employee> employeeOptional = this.employeeRepository.findById(employeeId);
        if (employeeOptional.isPresent()) {
            return employeeOptional.get();
        } else {
            return null;
        }
    }

    @Override
    public java.util.List<com.espark.adarsh.db.entity.Employee> getEmployees() {
        java.util.List<com.espark.adarsh.db.entity.Employee> employeeList = new java.util.LinkedList<>();
        this.employeeRepository.findAll().forEach(employee -> employeeList.add(employee));
        return employeeList;
    }
}
