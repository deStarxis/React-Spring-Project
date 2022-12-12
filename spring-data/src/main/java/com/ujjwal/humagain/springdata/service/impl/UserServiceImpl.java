package com.ujjwal.humagain.springdata.service.impl;

import com.ujjwal.humagain.springdata.entity.Role;
import com.ujjwal.humagain.springdata.entity.User;
import com.ujjwal.humagain.springdata.entity.dto.UserDto;
import com.ujjwal.humagain.springdata.model.LoginRequest;
import com.ujjwal.humagain.springdata.model.LoginResponse;
import com.ujjwal.humagain.springdata.model.RefreshTokenRequest;
import com.ujjwal.humagain.springdata.repository.RoleRepository;
import com.ujjwal.humagain.springdata.repository.UserRepository;
import com.ujjwal.humagain.springdata.security.JwtHelper;
import com.ujjwal.humagain.springdata.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserServiceImpl implements UserService {
    private final RoleRepository roleRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtHelper jwtHelper;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    @Override
    public void save(UserDto userDto) {
        User user = modelMapper.map(userDto, User.class);
        List<Role> roles = new ArrayList<>();
        roles.add(roleRepository.findById(2).get());
        user.setRoles(roles);
        String hashed = new BCryptPasswordEncoder().encode(userDto.getPassword());
        user.setPassword(hashed);
        userRepository.save(user);
    }
    @Override
    public void update(int id, UserDto userDto) {
        User user = userRepository.findById(id).orElseThrow(()->new RuntimeException("User not found"));
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        userRepository.save(user);
    }

    @Override
    public void delete(int id) {
        User user = userRepository.findById(id).orElseThrow(()->new RuntimeException(("User not found")));
        userRepository.delete(user);
    }

    @Override
    public List<UserDto> findAll() {
        return userRepository.findAll().stream().map(user -> modelMapper.map(user,UserDto.class)).toList();
    }

    @Override
    public UserDto findById(int id) {
        return userRepository.findById(id).map(user -> modelMapper.map(user,UserDto.class)).get();
    }

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        try {
            var result = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword())
            );
        } catch (BadCredentialsException e) {
            log.info("Bad Credentials");
        }

        final String accessToken = jwtHelper.generateToken(loginRequest.getEmail());
        final String refreshToken = jwtHelper.generateRefreshToken(loginRequest.getEmail());
        var loginResponse = new LoginResponse(accessToken, refreshToken);
        return loginResponse;
    }

    @Override
    public LoginResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
        boolean isRefreshTokenValid = jwtHelper.validateToken(refreshTokenRequest.getRefreshToken());
        if (isRefreshTokenValid) {
            final String accessToken = jwtHelper.generateToken(jwtHelper.getSubject(refreshTokenRequest.getRefreshToken()));
            var loginResponse = new LoginResponse(accessToken, refreshTokenRequest.getRefreshToken());
            return loginResponse;
        }
        return new LoginResponse();
    }
}
