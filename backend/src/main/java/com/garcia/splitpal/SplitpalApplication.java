package com.garcia.splitpal;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@OpenAPIDefinition(info = @Info(title = "Splitpal API", version= "1", description = "Spring Boot REST API"))
public class SplitpalApplication {
	public static void main(String[] args) {
		SpringApplication.run(SplitpalApplication.class, args);
	}

}
