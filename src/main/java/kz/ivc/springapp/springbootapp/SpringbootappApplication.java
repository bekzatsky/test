package kz.ivc.springapp.springbootapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.thymeleaf.extras.springsecurity4.dialect.SpringSecurityDialect;
import org.thymeleaf.spring5.SpringTemplateEngine;
import org.thymeleaf.templateresolver.AbstractTemplateResolver;

@SpringBootApplication
public class SpringbootappApplication {

	@Autowired
	private AbstractTemplateResolver templateResolver;

	@Bean
	public SpringTemplateEngine templateEngine() {
		SpringTemplateEngine templateEngine = new SpringTemplateEngine();
		templateEngine.setTemplateResolver(templateResolver);
		return templateEngine;
	}

	public static void main(String[] args) {
		SpringApplication.run(SpringbootappApplication.class, args);
	}
}
