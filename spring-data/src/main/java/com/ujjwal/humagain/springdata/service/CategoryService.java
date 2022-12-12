package com.ujjwal.humagain.springdata.service;

import com.ujjwal.humagain.springdata.entity.dto.CategoryDto;

import java.util.List;

public interface CategoryService {
    void save(CategoryDto categoryDto);
    void update(int id, CategoryDto categoryDto);
    void delete(int id);
    List<CategoryDto> findAll();
    CategoryDto findById(int id);
}
