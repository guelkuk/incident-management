package com.gkuk.incident_management.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    void deleteByUsername(String username);
    Optional<User> findByUsername(String username);
    List<User> findByRole(String role);
}
