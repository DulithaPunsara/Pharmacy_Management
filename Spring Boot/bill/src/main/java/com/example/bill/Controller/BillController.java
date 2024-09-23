package com.example.bill.Controller;

import com.example.bill.service.BillService;
import com.example.bill.data.Bill;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/bill")
public class BillController {

    @Autowired
    private BillService billService;

    @GetMapping("/text")
    public String helloText() {
        return "Hello World!";
    }
    @PostMapping("/save")
    public Bill saveBill(@RequestBody Bill bill){
        return billService.addBill(bill);
    }


    @GetMapping("/getallbills")
    public List<Bill> getAllBills(){
        return billService.getallbills();
    }


    @DeleteMapping("/delete/{id}")
    public String deleteBill(@PathVariable int id){
        return billService.deletebill(id);
    }


}
