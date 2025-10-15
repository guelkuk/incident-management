package com.gkuk.incident_management;

import com.gkuk.incident_management.user.User;
import com.gkuk.incident_management.incident.Incident;
import com.gkuk.incident_management.user.UserRepository;
import com.gkuk.incident_management.incident.IncidentRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class DataSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final IncidentRepository incidentRepository;

    public DataSeeder(UserRepository userRepository, IncidentRepository incidentRepository) {
        this.userRepository = userRepository;
        this.incidentRepository = incidentRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Eğer kullanıcı tablosu boşsa seedle
        if(userRepository.count() == 0){
            User user1 = new User();
            user1.setUsername("admin");
            user1.setPassword("admin123"); // Basit örnek, gerçek projede hash kullan
            user1.setEmail("admin@example.com");
            user1.setRole("ADMIN");

            User user2 = new User();
            user2.setUsername("johndoe");
            user2.setPassword("password");
            user2.setEmail("john@example.com");
            user2.setRole("USER");

            userRepository.save(user1);
            userRepository.save(user2);
        }

        // Eğer incident tablosu boşsa seedle
        if(incidentRepository.count() == 0){
            Incident incident1 = new Incident();
            incident1.setTitle("Server down");
            incident1.setDescription("Main server is not responding");
            incident1.setCategory("Server");
            incident1.setStatus("Open");
            incident1.setAssignedTo("admin");
            incident1.setCreatedAt(new Date());
            incident1.setUpdatedAt(new Date());

            Incident incident2 = new Incident();
            incident2.setTitle("Login issue");
            incident2.setDescription("Users cannot log in");
            incident2.setCategory("Authentication");
            incident2.setStatus("Open");
            incident2.setAssignedTo("johndoe");
            incident2.setCreatedAt(new Date());
            incident2.setUpdatedAt(new Date());

            incidentRepository.save(incident1);
            incidentRepository.save(incident2);
        }

        System.out.println("Dummy data seeded successfully!");
    }
}
