package com.rameshsoft.repository;

import com.rameshsoft.entity.EmailEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmailRepository extends JpaRepository<EmailEntity,Long> {
    boolean existsBySubject(String subject);
}
