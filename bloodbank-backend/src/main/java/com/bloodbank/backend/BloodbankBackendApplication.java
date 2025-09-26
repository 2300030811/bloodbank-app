package com.bloodbank.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;
import com.bloodbank.backend.repository.UserRepository;
import com.bloodbank.backend.model.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class BloodbankBackendApplication {

    private static final Logger log = LoggerFactory.getLogger(BloodbankBackendApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(BloodbankBackendApplication.class, args);
	}

    @Bean
    CommandLineRunner seedAdmin(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            userRepository.findByEmail("admin@bloodbank.local").ifPresentOrElse(
                existing -> {
                    log.info("Admin user already exists: {}", existing.getEmail());
                },
                () -> {
                    User admin = new User();
                    admin.setEmail("admin@bloodbank.local");
                    admin.setPassword(passwordEncoder.encode("Admin@123"));
                    admin.setRole("ROLE_ADMIN");
                    userRepository.save(admin);
                    log.info("Seeded default admin user: admin@bloodbank.local");
                }
            );
        };
    }
}
