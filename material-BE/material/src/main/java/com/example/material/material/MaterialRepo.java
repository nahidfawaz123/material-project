package com.example.material.material;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MaterialRepo extends JpaRepository<Material,Long> {
 Material findByTitle(String title) ;
}
