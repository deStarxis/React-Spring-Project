package com.ujjwal.humagain.springdata.entity.dto;

import lombok.Data;

@Data
public class AddressDto {
    private int id;
    private String street;
    private int zip;
    private String city;
}
