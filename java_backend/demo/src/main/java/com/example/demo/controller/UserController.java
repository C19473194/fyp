package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.UserRepository;
import com.example.demo.model.User;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Long id) {
        return userRepository.findById(id).orElse(null);
    }

    @PostMapping("/users")
    
    public ResponseEntity <User> createUser(@RequestBody User user) {
       
    
     try {
			User _user = userRepository
					.save(new User(user.getUserName(), user.getFirstName(), user.getLastName(), user.getEmail(), user.getPassword(), user.getProfileImage()));
			return new ResponseEntity<>(_user, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

    @PutMapping("users/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user) {
        if (userRepository.existsById(id)) {
            user.setUserId(id);
            return userRepository.save(user);
        }
        return null;
    }
   

    @DeleteMapping("users/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
