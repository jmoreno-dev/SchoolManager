package com.example.schoolmanager.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "id", columnDefinition = "BIGINT NOT NULL AUTO_INCREMENT")

    private Long id;
    @Column (name = "first_name", columnDefinition = "VARCHAR(100) NOT NULL")
    private String firstName;

    @Column (name = "last_name", columnDefinition = "VARCHAR(100) NOT NULL")
    private String lastName;

    @Column(unique = true , name = "email", columnDefinition = "VARCHAR(100) NOT NULL")
    private String email;

    @Column (name = "age", columnDefinition = "VARCHAR(3) NOT NULL")
    private String age;

    @Column (name = "subject", columnDefinition = "VARCHAR(100)")
    private String subject;
}
