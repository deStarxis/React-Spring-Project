package com.ujjwal.humagain.springdata.repository;

import com.ujjwal.humagain.springdata.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewRepository extends JpaRepository<Review,Integer> {
    List<Review> findAllByProductId(int id);
}
