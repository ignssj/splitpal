package com.garcia.splitpal.infra.security;

import com.garcia.splitpal.exception.NotFoundException;
import com.garcia.splitpal.repository.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    TokenService tokenService;
    @Autowired
    UserRepository userRepository;

    @SuppressWarnings("null")
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain filterChain)
            throws ServletException, IOException {
        var token = this.recoverToken(req);
        var login = tokenService.validateToken(token);

        if (login != null) {
            var user = userRepository.findByUsername(login);
            if (user.isEmpty()) {
                new NotFoundException("Invalid username or password");
            }
            var roles = Collections.singletonList(new SimpleGrantedAuthority("USER"));
            var authentication = new UsernamePasswordAuthenticationToken(user, null, roles);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(req, res);
    }

    private String recoverToken(HttpServletRequest req) {
        var authHeader = req.getHeader("Authorization");
        if (authHeader == null)
            return null;
        return authHeader.replace("Bearer ", "");
    }
}
