package com.ujjwal.humagain.springdata.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String comment;
    @ManyToOne
    @JsonBackReference(value = "product-review")
    @JoinColumn(name = "id_product")
    private Product product;
    @ManyToOne
    @JsonBackReference(value = "user-review")
    @JoinColumn(name = "id_user")
    private User user;
}
