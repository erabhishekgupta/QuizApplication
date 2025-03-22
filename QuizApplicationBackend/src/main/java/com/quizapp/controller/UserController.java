package com.quizapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.quizapp.model.LoginRequest;
import com.quizapp.model.User;
import com.quizapp.service.UserService;



@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	@PostMapping("/addUser") 
	@CrossOrigin(origins = "http://localhost:5173")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}
	
	@PostMapping("/loginUser")
	@CrossOrigin(origins = "http://localhost:5173")
	public Boolean loginUser(@RequestBody LoginRequest loginRequest) {
		return userService.loginUser(loginRequest);
		
   }

}
