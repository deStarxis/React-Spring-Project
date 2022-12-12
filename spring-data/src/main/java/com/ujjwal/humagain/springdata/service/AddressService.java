package com.ujjwal.humagain.springdata.service;

import com.ujjwal.humagain.springdata.entity.dto.AddressDto;

import java.util.List;

public interface AddressService {
    void save(AddressDto addressDto);
    List<AddressDto> findAll();
    AddressDto findById(int id);
    void delete(int id);
    void update(int id, AddressDto addressDto);
}
