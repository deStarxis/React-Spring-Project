package com.ujjwal.humagain.springdata.service.impl;

import com.ujjwal.humagain.springdata.entity.Category;
import com.ujjwal.humagain.springdata.entity.dto.CategoryDto;
import com.ujjwal.humagain.springdata.repository.CategoryRepository;
import com.ujjwal.humagain.springdata.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class CategoryServiceImpl implements CategoryService {
    private final CategoryRepository categoryRepository;
    private final ModelMapper modelMapper;

    @Override
    public void save(CategoryDto categoryDto) {
        Category category = modelMapper.map(categoryDto, Category.class);
        categoryRepository.save(category);
    }

    @Override
    public void update(int id, CategoryDto categoryDto) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        category.setName(categoryDto.getName());
        categoryRepository.save(category);
    }

    @Override
    public void delete(int id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Category not found"));
        categoryRepository.delete(category);
    }

    @Override
    public List<CategoryDto> findAll() {
        return categoryRepository.findAll().stream().map(category -> modelMapper.map(category,CategoryDto.class)).toList();
    }

    @Override
    public CategoryDto findById(int id) {
        return categoryRepository.findById(id).map(category -> modelMapper.map(category,CategoryDto.class)).get();
    }
}
