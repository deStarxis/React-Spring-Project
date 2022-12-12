package com.ujjwal.humagain.springdata.aspect.offensivewords;

import com.ujjwal.humagain.springdata.entity.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaaOffensiveWords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int count;
    private LocalDateTime dateTime;
    @OneToOne
    private User user;
}
