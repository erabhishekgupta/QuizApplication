package com.quizapp.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizapp.model.*;


@Repository
public interface UserRepository extends JpaRepository<User, String> {
	
	

}