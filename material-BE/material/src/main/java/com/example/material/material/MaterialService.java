package com.example.material.material;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MaterialService {
    private final MaterialRepo materialRepo ;
    @Autowired

    public MaterialService(MaterialRepo materialRepo) {
        this.materialRepo =materialRepo ;
    }
    public List< Material > getMaterials(){
        return materialRepo.findAll();
    }

    public void addMaterial(Material material){
       materialRepo.save(material)  ;
    }
    public Material getMaterial(String title){
        return materialRepo.findByTitle(title);
    }
    public Material getMaterialById(String id){
        return materialRepo.findById(Long.parseLong(id)).orElse(null);
    }

}
