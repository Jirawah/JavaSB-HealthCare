package com.Jirawah.webApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.Jirawah.webApp")
@EnableDiscoveryClient
@EnableFeignClients(basePackages = "com.Jirawah.webApp.feign")
@EnableJpaRepositories(basePackages = "com.Jirawah.webApp.repository")
public class WebAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebAppApplication.class, args);
	}

}
