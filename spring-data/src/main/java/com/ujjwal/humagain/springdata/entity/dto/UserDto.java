package com.ujjwal.humagain.springdata.entity.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.util.List;

@Data
public class UserDto {
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    @JsonIgnore
    private AddressDto address;
    @JsonIgnore
    private List<ReviewDto> reviewList;
    @JsonIgnore
    private List<RoleDto> roles;


}
