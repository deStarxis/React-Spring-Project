package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime;
import com.ujjwal.humagain.springdata.entity.dto.CategoryDto;
import com.ujjwal.humagain.springdata.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping
    @ExecutionTime
    public List<CategoryDto> findAll(){
        return categoryService.findAll();
    }
    @GetMapping("/{id}")
    @ExecutionTime
    public CategoryDto findById(@PathVariable int id){
        return categoryService.findById(id);
    }
    @PostMapping
    @ExecutionTime
    public void save(@RequestBody CategoryDto categoryDto){
        categoryService.save(categoryDto);
    }
    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody CategoryDto categoryDto){
        categoryService.update(id, categoryDto);
    }
    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id){
        categoryService.delete(id);
    }
}
