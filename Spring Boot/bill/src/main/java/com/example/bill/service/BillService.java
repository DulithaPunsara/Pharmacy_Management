package com.example.bill.service;

import com.example.bill.data.Bill;
import com.example.bill.data.BillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Service
public class BillService {


    @Autowired
    private BillRepository billRepository;

    public Bill addBill(Bill bill) {
        return billRepository.save(bill);
    }


    public List<Bill> getallbills() {
        return billRepository.findAll();
    }

    //delete user
    public String deletebill(int id) {
        billRepository.deleteById(id);
        return "deleted";
    }



}
