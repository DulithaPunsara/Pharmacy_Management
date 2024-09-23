package com.example.Ayush.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product,Integer> {

    // aluthin java query danakota
    // jpql - java persistence query language

    @Query("SELECT p FROM Product p WHERE p.product_name=?1")
    List<Product> findByProductName(String Product_name);


}
