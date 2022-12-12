package com.ujjwal.humagain.springdata.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int price;
    private int rating;

    @ManyToOne
    @JoinColumn(name = "id_category")
    @JsonBackReference(value = "product-category")
    private Category category;

    @JsonManagedReference(value = "user-product")
    @OneToOne
    @JoinColumn(name = "id_user")
    private User user;

    @JsonManagedReference(value = "product-review")
    @OneToMany(mappedBy = "product")
    private List<Review> reviewList;
}
