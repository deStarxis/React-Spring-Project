package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime;
import com.ujjwal.humagain.springdata.entity.dto.ReviewDto;
import com.ujjwal.humagain.springdata.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/reviews")
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    @GetMapping
    @ExecutionTime
    public List<ReviewDto> findAll(){
        return reviewService.findAll();
    }

    @GetMapping("/{id}")
    @ExecutionTime
    public ReviewDto findById(@PathVariable int id) {
        return reviewService.findById(id);
    }

    @PostMapping
    @ExecutionTime
    public void save(@RequestBody ReviewDto reviewDto){
        reviewService.save(reviewDto);
    }

    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody ReviewDto reviewDto) {
        reviewService.update(id, reviewDto);
    }

    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id) {
        reviewService.delete(id);
    }
}
