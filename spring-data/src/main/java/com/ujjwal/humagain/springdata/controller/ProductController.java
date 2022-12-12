package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime;
import com.ujjwal.humagain.springdata.aspect.offensivewords.OffensiveWordFilter;
import com.ujjwal.humagain.springdata.entity.Product;
import com.ujjwal.humagain.springdata.entity.Review;
import com.ujjwal.humagain.springdata.entity.dto.ProductDto;
import com.ujjwal.humagain.springdata.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping
    @ExecutionTime
    @OffensiveWordFilter
    public ResponseEntity<List<ProductDto>> findAll(){
        return ResponseEntity.ok().body(productService.findAll());
    }

    @GetMapping("/{id}")
    @ExecutionTime
    public ProductDto findById(@PathVariable int id) {
        return productService.findById(id);
    }

    @PostMapping
    @ExecutionTime
    @OffensiveWordFilter
    public ResponseEntity save(@RequestBody ProductDto productDto){
        productService.save(productDto);
        return ResponseEntity.ok().body("Product added successfully");
    }

    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody ProductDto productDto) {
        productService.update(id, productDto);
    }

    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id) {
        productService.delete(id);
    }

    @GetMapping("/filterByPriceGreaterThan")
    @ExecutionTime
    public List<Product> findAllByPriceGreaterThan(@RequestParam int minPrice){
        return productService.findAllByPriceGreaterThan(minPrice);
    }
    @GetMapping("/filterByName")
    @ExecutionTime
    public List<Product> findAllByNameContaining(@RequestParam String keyword){
        return productService.findAllByNameContaining(keyword);
    }
    @GetMapping("/filterByCategoryAndPriceLessThan")
    @ExecutionTime
    public List<Product> findAllByCategory_NameAndPriceLessThan(@RequestParam String name, @RequestParam int maxPrice){
        return productService.findAllByCategory_NameAndPriceLessThan(name,maxPrice);
    }

    @GetMapping("/{id}/reviews")
    @ExecutionTime
    public List<Review> findAllByProductId(@PathVariable int id){
        return productService.findAllByProductId(id);
    }
}
