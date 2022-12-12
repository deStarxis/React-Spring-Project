package com.ujjwal.humagain.springdata.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class AopIsAwesomeHeaderException extends RuntimeException{
    public AopIsAwesomeHeaderException(String message){
        super(message);
    }
}
