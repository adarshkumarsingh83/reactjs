package com.espark.adarsh.config;

import com.espark.adarsh.entity.Employee;
import com.espark.adarsh.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class DataInit {

    @Autowired
    EmployeeRepository employeeRepository;

    @PostConstruct
    public void init(){
        Employee adarsh = new Employee();
        adarsh.setFirstName("adarsh");
        adarsh.setLastName("kumar");
        adarsh.setEmail("adarsh@kumar");
        adarsh.setAge("35");
        this.employeeRepository.save(adarsh);

        Employee radha = new Employee();
        radha.setFirstName("radha");
        radha.setLastName("singh");
        radha.setEmail("radha@singh");
        radha.setAge("30");
        this.employeeRepository.save(radha);

        Employee amit = new Employee();
        amit.setFirstName("amit");
        amit.setLastName("kumar");
        amit.setEmail("amit@kumar");
        amit.setAge("30");
        this.employeeRepository.save(amit);
    }
}
