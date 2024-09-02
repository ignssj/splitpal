package com.garcia.splitpal.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AWSConfig {

    @Value("${aws.region}")
    private String region;

    @Bean
    public AmazonS3 createS3Client() {
        return AmazonS3ClientBuilder
                .standard()
                .withRegion(region)
                .build();
    }
}
