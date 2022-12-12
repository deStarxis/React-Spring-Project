package com.ujjwal.humagain.springdata.repository;

import com.ujjwal.humagain.springdata.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    List<Product> findAllByNameContaining(String keyword);
    List<Product> findAllByPriceGreaterThan(int minPrice);
    List<Product> findAllByCategory_NameAndPriceLessThan(String name, int maxPrice);

}
