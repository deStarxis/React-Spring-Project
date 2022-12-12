package com.ujjwal.humagain.springdata.repository;

import com.ujjwal.humagain.springdata.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category,Integer> {

}
