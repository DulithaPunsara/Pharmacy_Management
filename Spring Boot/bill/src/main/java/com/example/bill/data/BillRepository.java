package com.example.bill.data;

import org.springframework.data.jpa.repository.JpaRepository;
public interface BillRepository extends JpaRepository<Bill,Integer>{

    // aluthin java query danakota
    // jpql - java persistence query language
}
