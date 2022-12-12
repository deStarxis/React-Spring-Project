package com.ujjwal.humagain.springdata.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
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
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String street;
    private int zip;
    private String city;
    @JsonManagedReference(value = "user-address")
    @OneToOne(mappedBy = "address")
    private User user;
}
