package com.Jirawah.msPatient;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class MsPatientApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsPatientApplication.class, args);
	}

}
