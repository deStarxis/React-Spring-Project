package com.ujjwal.humagain.springdata.aspect.offensivewords;

import com.ujjwal.humagain.springdata.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WaaOffensiveWordsRepository extends JpaRepository<WaaOffensiveWords, Integer> {
    Optional<WaaOffensiveWords> findByUser(User user);
}
