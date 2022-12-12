package com.ujjwal.humagain.springdata.controller;

import com.ujjwal.humagain.springdata.entity.dto.UserDto;
import com.ujjwal.humagain.springdata.model.LoginRequest;
import com.ujjwal.humagain.springdata.model.LoginResponse;
import com.ujjwal.humagain.springdata.model.RefreshTokenRequest;
import com.ujjwal.humagain.springdata.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/uaa")
@RequiredArgsConstructor
public class UaaController {
    private final UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        var loginResponse = userService.login(loginRequest);
        return ResponseEntity.ok().body(loginResponse);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> register(@RequestBody UserDto userDto) {
        userService.save(userDto);
        return ResponseEntity.ok().body("Registered New User Successfully");
    }
    @PostMapping("/refreshToken")
    public LoginResponse refreshToken(@RequestBody RefreshTokenRequest refreshTokenRequest) {
        return userService.refreshToken(refreshTokenRequest);
    }
}