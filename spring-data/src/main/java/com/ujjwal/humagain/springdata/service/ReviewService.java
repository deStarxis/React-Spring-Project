package com.ujjwal.humagain.springdata.service;

import com.ujjwal.humagain.springdata.entity.dto.ReviewDto;

import java.util.List;

public interface ReviewService {
    void save(ReviewDto reviewDto);
    void update(int id, ReviewDto reviewDto);
    void delete(int id);
    List<ReviewDto> findAll();
    ReviewDto findById(int id);

}
