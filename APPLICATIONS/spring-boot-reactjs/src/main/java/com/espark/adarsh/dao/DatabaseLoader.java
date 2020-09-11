package com.espark.adarsh.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final com.espark.adarsh.dao.EmployeeRepository repository;

	@Autowired
	public DatabaseLoader(com.espark.adarsh.dao.EmployeeRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repository.save(new com.espark.adarsh.dao.Employee("Adarsh ", "kumar", "pm"));
		this.repository.save(new com.espark.adarsh.dao.Employee("Radha", "Singh", "head"));
		this.repository.save(new com.espark.adarsh.dao.Employee("Amit", "Kumar", "account"));
		this.repository.save(new com.espark.adarsh.dao.Employee("Usha", "Singh", "finaancer"));
		this.repository.save(new com.espark.adarsh.dao.Employee("Niranjan", "singh", "owner"));
		this.repository.save(new com.espark.adarsh.dao.Employee("Peregrin", "Took", "pipe smoker"));
	}
}
