package com.ujjwal.humagain.springdata.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "category")
    @JsonManagedReference(value = "product-category")
    private List<Product> productList;

}
