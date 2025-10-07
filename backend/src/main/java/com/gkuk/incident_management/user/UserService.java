package com.gkuk.incident_management.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public List<User> getUsers() {
        return userRepository.findAll();
    }
    public List<User> getUsersById(Integer id) {
        return userRepository.findAll().stream()
                .filter(user -> id==user.getId())
                .collect(Collectors.toList());
    }
    public List<User> getUsersByRole(String role) {
        return userRepository.findAll().stream()
                .filter(user -> role.equals(user.getRole()))
                .collect(Collectors.toList());
    }
    public List<User> getUsersByUsername(String searchText) {
        return userRepository.findAll().stream()
                .filter(user -> user.getUsername().toLowerCase()
                        .contains(searchText.toLowerCase()))
                .collect(Collectors.toList());
    }
    public User addUser(User user) {
        userRepository.save(user);
        return user;
    }
    public User updateUser(User updatedUser) {
        Optional<User> existingUser = userRepository.findByUsername(updatedUser.getUsername());

        if (existingUser.isPresent()) {
            User userToUpdate = existingUser.get();
            userToUpdate.setUsername(updatedUser.getUsername());
            userToUpdate.setEmail(updatedUser.getEmail());
            userToUpdate.setPassword(updatedUser.getPassword());

            userRepository.save(userToUpdate);
            return userToUpdate;
        }
        return null;
    }
    public void deleteByUsername(String username) {
        userRepository.deleteByUsername(username);
    }
    public void deleteById(Integer id) {
        userRepository.deleteById(id);
    }
}
