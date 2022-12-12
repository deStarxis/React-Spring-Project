package com.ujjwal.humagain.springdata.service;

import com.ujjwal.humagain.springdata.entity.dto.UserDto;
import com.ujjwal.humagain.springdata.model.LoginRequest;
import com.ujjwal.humagain.springdata.model.LoginResponse;
import com.ujjwal.humagain.springdata.model.RefreshTokenRequest;

import java.util.List;

public interface UserService {
    void save(UserDto userDto);
    void update(int id, UserDto userDto);
    void delete(int id);
    List<UserDto> findAll();
    UserDto findById(int id);

    LoginResponse login(LoginRequest loginRequest);

    LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
