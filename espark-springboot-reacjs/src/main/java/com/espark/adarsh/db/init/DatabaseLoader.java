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
package com.espark.adarsh.db.init;

/**
 * @author Greg Turnquist
 */
// tag::code[]
@org.springframework.stereotype.Component
public class DatabaseLoader implements org.springframework.boot.CommandLineRunner {

    private final com.espark.adarsh.db.repository.EmployeeRepository repository;

    @org.springframework.beans.factory.annotation.Autowired
    public DatabaseLoader(com.espark.adarsh.db.repository.EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Adarsh ", "kumar", "adarsh@kumar.espark",10));
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Radha", "Singh", "radha@singh.espark",10));
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Amit", "Kumar", "amit@kumar.espark",10));
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Usha", "Singh", "usha@singh.espark",10));
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Niranjan", "singh", "niranjan@singh.espark",10));
        this.repository.save(new com.espark.adarsh.db.entity.Employee("Peregrin", "Took", "pipe@espark",10));
    }
}
// end::code[]