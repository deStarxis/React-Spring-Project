package com.ujjwal.humagain.springdata.service;

import com.ujjwal.humagain.springdata.entity.Product;
import com.ujjwal.humagain.springdata.entity.Review;
import com.ujjwal.humagain.springdata.entity.dto.ProductDto;
import com.ujjwal.humagain.springdata.entity.dto.ReviewDto;

import java.util.List;

public interface ProductService {
    void save(ProductDto productDto);
    void update(int id, ProductDto productDto);
    void delete(int id);
    List<ProductDto> findAll();
    ProductDto findById(int id);
    List<Product> findAllByNameContaining(String keyword);
    List<Product> findAllByPriceGreaterThan(int minPrice);
    List<Product> findAllByCategory_NameAndPriceLessThan(String name, int maxPrice);
    List<Review> findAllByProductId(int id);

}
