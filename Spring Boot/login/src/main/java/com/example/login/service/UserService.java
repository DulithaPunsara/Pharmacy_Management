package com.example.login.service;


import com.example.login.data.User;
import com.example.login.data.userRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {


    // Inject the UserRepository
    @Autowired
    private userRepository userRepository;

    // Add new user
    public User addUser(User user) {
        return userRepository.save(user);
    }


    //get oll users
    public List<User> getallusers() {
        return userRepository.findAll();
    }




    //delete user
    public String deleteUser(int id) {
        userRepository.deleteById(id);
        return "deleted";
    }




}
