package com.espark.adarsh.services;

public interface EmployeeServices {

    com.espark.adarsh.db.entity.Employee saveEmployee(com.espark.adarsh.db.entity.Employee employee);
    com.espark.adarsh.db.entity.Employee updateEmployee(Long employeeId, com.espark.adarsh.db.entity.Employee employee);
    com.espark.adarsh.db.entity.Employee getEmployee(Long employeeId);
    com.espark.adarsh.db.entity.Employee deleteEmployee(Long employeeId);
    java.util.List<com.espark.adarsh.db.entity.Employee> getEmployees();
}
