package com.example.bill.data;


import jakarta.persistence.*;

@Entity
@Table(name="s_bill")
public class Bill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;


    @Column(name="n_of_product")
    private int n_of_product;


    @Column(name="total_price")
    private int total_price;


    @Column(name="dates")
    private String dates;

    @Column(name="times" )
    private String times;


    public Bill() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getN_of_product() {
        return n_of_product;
    }

    public void setN_of_product(int n_of_product) {
        this.n_of_product = n_of_product;
    }



    public int getTotal_price() {
        return total_price;
    }

    public void setTotal_price(int total_price) {
        this.total_price = total_price;
    }


    public String getDates() {
        return dates;
    }

    public void setDates(String dates) {
        this.dates = dates;
    }





    public String getTimes() {
        return times;
    }

    public void setTimes(String times) {
        this.times = times;
    }

}
