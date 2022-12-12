package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime;
import com.ujjwal.humagain.springdata.entity.dto.AddressDto;
import com.ujjwal.humagain.springdata.service.AddressService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/addresses")
@RequiredArgsConstructor
public class AddressController {
    private final AddressService addressService;

    @GetMapping
    @ExecutionTime
    public List<AddressDto> findAll(){
        return addressService.findAll();
    }
    @GetMapping("/{id}")
    @ExecutionTime
    public AddressDto findById(@PathVariable int id){
        return addressService.findById(id);
    }
    @PostMapping
    @ExecutionTime
    public void save(@RequestBody AddressDto addressDto){
        addressService.save(addressDto);
    }
    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody AddressDto addressDto){
        addressService.update(id, addressDto);
    }
    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id){
        addressService.delete(id);
    }
}
