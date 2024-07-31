package com.garcia.splitpal.exception;

public class UsernameAlreadyExistsException extends RuntimeException {
    public UsernameAlreadyExistsException(String message){
        super(message);
    }

}
