package com.quizapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quizapp.model.LoginRequest;
import com.quizapp.model.User;
import com.quizapp.repository.UserRepository;


@Service
public class UserService {
	
	@Autowired 
	UserRepository usersRepo;
	
	public User addUser(User user) {
		
		return usersRepo.save(user);
		
	}
	
	public Boolean loginUser(LoginRequest loginRequest) {
		
		Optional<User> user = usersRepo.findById(loginRequest.getUserId());
		User user1 = user.get();
		
		if(user1 == null) {
			return false;
		}
		
		
		
		if(!user1.getPassword().equals(loginRequest.getPassword())) {
			return false;
		}
		
		return true;
		
		
		
	}

}