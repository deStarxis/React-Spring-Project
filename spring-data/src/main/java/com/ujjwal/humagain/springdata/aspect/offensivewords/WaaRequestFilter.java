package com.ujjwal.humagain.springdata.aspect.offensivewords;

import com.ujjwal.humagain.springdata.entity.User;
import com.ujjwal.humagain.springdata.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Aspect
@Component
@Transactional
@RequiredArgsConstructor
public class WaaRequestFilter {
    private final HttpServletRequest httpServletRequest;
    private final UserRepository userRepository;
    private final WaaOffensiveWordsRepository waaOffensiveWordsRepository;

    @Pointcut("@annotation(com.ujjwal.humagain.springdata.aspect.offensivewords.OffensiveWordFilter)")
    public void a(){}
    public User getUserDetails(){
        Object getUser = SecurityContextHolder. getContext(). getAuthentication(). getPrincipal();
        String username;
        if (getUser instanceof UserDetails) {
            username = ((UserDetails)getUser). getUsername();
        } else {
            username = getUser.toString();
        }
        return userRepository.findByEmail(username);
    }

    public WaaOffensiveWords getOffensiveCount(User user){
        Optional<WaaOffensiveWords> offensiveCountOptional = waaOffensiveWordsRepository.findByUser(user);
        if(!offensiveCountOptional.isPresent()){
            WaaOffensiveWords waaOffensiveWords = new WaaOffensiveWords();
            waaOffensiveWords.setCount(0);
            waaOffensiveWords.setUser(user);
            waaOffensiveWords.setDateTime(LocalDateTime.now());
            waaOffensiveWordsRepository.save(waaOffensiveWords);
            return waaOffensiveWords;
        }
        return offensiveCountOptional.get();
    }
    @Before("a()")
    public void offensiveCount(JoinPoint joinPoint) {
        User user = getUserDetails();
        WaaOffensiveWords waaOffensiveWords = getOffensiveCount(user);
        if( waaOffensiveWords.getCount() > 5 && waaOffensiveWords.getDateTime().isBefore(LocalDateTime.now()) ){
            waaOffensiveWords.setCount(0);
        }

        String input = httpServletRequest.getHeader("word");
        if( input != null && input.equals("springing") ){
            waaOffensiveWords.setCount(waaOffensiveWords.getCount()+1);
            if( waaOffensiveWords.getCount() > 5 ){
                waaOffensiveWords.setDateTime(LocalDateTime.now().plus(10, ChronoUnit.SECONDS));
                String message = " Max Bad word limit. You need to wait for "+ waaOffensiveWords.getDateTime() +"min";
                ResponseEntity.badRequest().body(message);
                throw new RuntimeException(message);
            }
        }
    }
}
