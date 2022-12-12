package com.ujjwal.humagain.springdata.repository;

import com.ujjwal.humagain.springdata.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
