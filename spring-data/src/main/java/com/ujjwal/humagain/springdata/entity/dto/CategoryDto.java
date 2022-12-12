package com.ujjwal.humagain.springdata.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;


@Data
public class CategoryDto {
    private int id;
    private String name;
    @JsonIgnore
    private List<ProductDto> productList;
}
