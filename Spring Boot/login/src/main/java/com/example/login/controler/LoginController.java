package com.example.login.controler;

import com.example.login.service.UserService;
import com.example.login.data.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {

    @Autowired
    private UserService userService;
    @GetMapping("/text")
    public String helloText() {
        return "Hello World!";
    }


    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        // save user logic here
        return  userService.addUser(user);
    }


    @GetMapping("/getallusers")
    public List<User> getAllUsers(){
        // get all users logic here
        return userService.getallusers();
    }





    @DeleteMapping(path="/delete/{id}")
    public String deleteProduct(@PathVariable int id){

        return userService.deleteUser(id);
    }





}
