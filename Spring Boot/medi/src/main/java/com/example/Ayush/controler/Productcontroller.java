package com.example.Ayush.controler;

import com.example.Ayush.data.Product;
import com.example.Ayush.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class Productcontroller {

    @Autowired
    private ProductService productService;

    @GetMapping(path = "/medicine")
    public List<Product> getAllProduct(){

        return productService.getAllProducts();
    }


    @GetMapping(path = "/M_Search/{id}")
    public Product getProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }




    // Add a new product
    @PostMapping(path = "/M_Add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return ResponseEntity.ok(product);
    }



    @DeleteMapping("M_Del/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }



    @GetMapping(path = "/products/")
            public List<Product> findByProductName(@RequestParam("Product_name") String Product_name ){
                return productService.getByProductName(Product_name);
            }


    @PutMapping(path = "/M_Update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable int id, @RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(id, product);
        if (updatedProduct != null) {
            return ResponseEntity.ok(updatedProduct);
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
