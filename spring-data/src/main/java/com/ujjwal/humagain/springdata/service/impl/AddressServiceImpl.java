package com.ujjwal.humagain.springdata.service.impl;

import com.ujjwal.humagain.springdata.entity.Address;
import com.ujjwal.humagain.springdata.entity.dto.AddressDto;
import com.ujjwal.humagain.springdata.repository.AddressRepository;
import com.ujjwal.humagain.springdata.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@PreAuthorize("hasRole('ROLE_ADMIN')")
public class AddressServiceImpl implements AddressService {

    private final AddressRepository addressRepository;
    private final ModelMapper modelMapper;

    @Override
    public void save(AddressDto addressDto) {
        Address address = modelMapper.map(addressDto,Address.class);
        addressRepository.save(address);
    }

    @Override
    public List<AddressDto> findAll() {
        return addressRepository.findAll().stream().map(address -> modelMapper.map(address,AddressDto.class)).toList();
    }

    @Override
    public AddressDto findById(int id) {
         return addressRepository.findById(id).map(address -> modelMapper.map(address,AddressDto.class)).get();
    }

    @Override
    public void delete(int id) {
        Address address = addressRepository.findById(id).orElseThrow(()-> new RuntimeException("Address not found"));
        addressRepository.delete(address);
    }

    @Override
    public void update(int id, AddressDto addressDto) {
        Address address = addressRepository.findById(id).orElseThrow(()-> new RuntimeException("Address not found"));
        address.setCity(addressDto.getCity());
        address.setZip(addressDto.getZip());
        address.setStreet(addressDto.getStreet());
        addressRepository.save(address);
    }
}
