package com.example.material.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface UserRepo extends JpaRepository<User,Long> {
    @Query(value = "SELECT * FROM User u WHERE u.status = 'ACTIVE' ",nativeQuery = true)
    List <User> findAllUserStatus();

    User findByUsername(String username) ;

    User findByEmail(String email);
    @Query("SELECT u FROM User u WHERE u.id = :id ")
    User findByOneId(@Param("id")Long id);
}
