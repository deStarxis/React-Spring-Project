package com.ujjwal.humagain.springdata.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    @JsonBackReference(value = "user-review")
    @OneToMany(mappedBy = "user")
    private List<Review> reviewList;

    @JsonBackReference(value = "user-product")
    @OneToOne(mappedBy = "user")
    private Product product;

    @OneToOne
    @JsonBackReference(value = "user-address")
    @JoinColumn(name = "id_address") //optional
    private Address address;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable
    private List<Role> roles;
}
