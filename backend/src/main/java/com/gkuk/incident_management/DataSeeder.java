package com.gkuk.incident_management;

import com.gkuk.incident_management.user.User;
import com.gkuk.incident_management.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;

    public DataSeeder(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if(userRepository.count() == 0){
            User user1 = new User();
            user1.setUsername("admin");
            user1.setPassword("admin123");
            user1.setEmail("admin@example.com");
            user1.setRole("ADMIN");

            User user2 = new User();
            user2.setUsername("gkuk");
            user2.setPassword("password");
            user2.setEmail("gkuk@example.com");
            user2.setRole("USER");

            userRepository.save(user1);
            userRepository.save(user2);

            System.out.println("Dummy users seeded successfully!");
        }
    }
}
