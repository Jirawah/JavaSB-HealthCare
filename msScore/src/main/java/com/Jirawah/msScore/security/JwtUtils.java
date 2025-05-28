package com.Jirawah.msScore.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import jakarta.annotation.PostConstruct;

import java.security.Key;

@Component
public class JwtUtils {

    @Value("${jwt.secret}")
    private String secret;

    /**
     * Méthode de diagnostic pour afficher la valeur effective du secret JWT.
     * Ne laisser que temporairement en développement.
     */
    @PostConstruct
    public void printSecret() {
        System.out.println("==== JWT Secret for msScore ====");
        System.out.println(secret);
        System.out.println("=================================");
    }

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(secret.getBytes());
    }

    public String extractUsername(String token) {
        return extractAllClaims(token).getSubject();
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
