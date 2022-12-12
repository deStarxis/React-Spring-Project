package com.ujjwal.humagain.springdata.service.impl;

import com.ujjwal.humagain.springdata.entity.Review;
import com.ujjwal.humagain.springdata.entity.dto.ReviewDto;
import com.ujjwal.humagain.springdata.repository.ReviewRepository;
import com.ujjwal.humagain.springdata.security.JwtHelper;
import com.ujjwal.humagain.springdata.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class ReviewServiceImpl implements ReviewService {
    private final ReviewRepository reviewRepository;
    private final ModelMapper modelMapper;
    private final JwtHelper jwtHelper;

    @Override
    public void save(ReviewDto reviewDto) {
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        Review review = modelMapper.map(reviewDto, Review.class);
        review.setUser(jwtHelper.getUser());
        reviewRepository.save(review);
    }

    @Override
    public void update(int id, ReviewDto reviewDto) {
        Review review = reviewRepository.findById(id).orElseThrow(()->new RuntimeException("Review not found"));
        review.setComment(reviewDto.getComment());
        reviewRepository.save(review);
    }

    @Override
    public void delete(int id) {
        Review review = reviewRepository.findById(id).orElseThrow(()->new RuntimeException("Review not found"));
        reviewRepository.delete(review);
    }

    @Override
    public List<ReviewDto> findAll() {
        return reviewRepository.findAll().stream().map(review -> modelMapper.map(review,ReviewDto.class)).toList();
    }

    @Override
    public ReviewDto findById(int id) {
        return reviewRepository.findById(id).map(review -> modelMapper.map(review,ReviewDto.class)).get();
    }
}
