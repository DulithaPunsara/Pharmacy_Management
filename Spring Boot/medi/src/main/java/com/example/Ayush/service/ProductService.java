package com.example.Ayush.service;

import com.example.Ayush.data.Product;
import com.example.Ayush.data.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    public Product getProductById(int id) {
        Optional<Product> product = productRepository.findById(id);
        return product.orElse(null);
    }

    // Get products by name
    public List<Product> getByProductName(String productName) {
        return productRepository.findByProductName(productName);
    }

    // Save a product
    public void saveProduct(Product product) {
        productRepository.save(product);
    }




    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }


    public Product updateProduct(int id, Product updatedProduct) {
        Optional<Product> existingProductOptional = productRepository.findById(id);
        if (existingProductOptional.isPresent()) {
            Product existingProduct = existingProductOptional.get();
            existingProduct.setProduct_name(updatedProduct.getProduct_name());
            existingProduct.setQuantity(updatedProduct.getQuantity());
            existingProduct.setPrice(updatedProduct.getPrice());
            return productRepository.save(existingProduct);
        } else {
            return null; // or throw an exception if the product doesn't exist
        }
    }


}

