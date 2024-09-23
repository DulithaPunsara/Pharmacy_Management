package com.example.login.data;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<User,Integer> {

    // aluthin java query danakota
    // jpql - java persistence query language

}
