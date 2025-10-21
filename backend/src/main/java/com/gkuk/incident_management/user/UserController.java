package com.gkuk.incident_management.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {
        "http://localhost:3000",
        "https://master.d391sbei662o8o.amplifyapp.com"
})
@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping
    public List<User> getUsers(
            @RequestParam(required = false) String role,
            @RequestParam(required = false) String username,
            @RequestParam(required = false ) Integer id){
        if(role!=null){
            return userService.getUsersByRole(role);
        }
        else if(username!=null){
            return userService.getUsersByUsername(username);
        }
        else if(id!=null){
            return userService.getUsersById(id);
        }
        return userService.getUsers();
    }
    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user){
        User createdUser = userService.addUser(user);
        return new  ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }
    @PutMapping
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User resultUser = userService.updateUser(user);
        if (resultUser!=null){
            return new ResponseEntity<>(resultUser, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/username/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username){
        userService.deleteByUsername(username);
        return new ResponseEntity<>("User has been deleted", HttpStatus.OK);
    }
    @DeleteMapping("/id/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id){
        userService.deleteById(id);
        return new ResponseEntity<>("User has been deleted", HttpStatus.OK);
    }

}
