package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.aspect.executionTime.ExecutionTime;
import com.ujjwal.humagain.springdata.entity.User;
import com.ujjwal.humagain.springdata.entity.dto.UserDto;
import com.ujjwal.humagain.springdata.security.JwtHelper;
import com.ujjwal.humagain.springdata.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtHelper jwtHelper;

    @GetMapping
    @ExecutionTime
    public List<UserDto> findAll() {
        return userService.findAll();
    }

    @GetMapping("/getMe")
    @PreAuthorize("hasRole('ROLE_USER') || hasRole('ROLE_ADMIN')")
    @ExecutionTime
    public User findMe() {
        return jwtHelper.getUser();
    }

    @GetMapping("/{id}")
    @ExecutionTime
    public UserDto findById(@PathVariable int id) {
        return userService.findById(id);
    }

    @PutMapping("/{id}")
    @ExecutionTime
    public void update(@PathVariable int id, @RequestBody UserDto userDto) {
        userService.update(id, userDto);
    }

    @DeleteMapping("/{id}")
    @ExecutionTime
    public void delete(@PathVariable int id) {
        userService.delete(id);
    }
}
