/*
 * Copyright 2015 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.espark.adarsh.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author Greg Turnquist
 */
// tag::code[]
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
// end::code[]