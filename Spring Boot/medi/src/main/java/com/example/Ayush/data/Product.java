package com.example.Ayush.data;

import jakarta.persistence.*;

@Entity
@Table(name="stock1")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="M_Name")
    private String product_name;

    @Column(name="M_Qty")
    private int quantity;

    @Column(name="M_Price")
    private int price;

    public Product() {
    }



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }




    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }



    public int getPrice() {
        return price;
    }

    public void setgetPrice(int quantity) {
        this.price = price;
    }


    public void setPrice(int price) {
        this.price = price;
    }
}


