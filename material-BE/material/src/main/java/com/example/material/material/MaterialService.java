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
        Material material = materialRepo.findByTitle(title);
        return materialRepo.findByTitle(title);
    }

    public Material getMaterialById(String id){
        return materialRepo.findById(Long.parseLong(id)).orElse(null);
    }

    public  void  deleteMaterialByID (String id ){
        materialRepo.deleteById( Long.parseLong(id));
    }

    public Material updateProduct(String id , Material material) {
        Material updatedMaterial = materialRepo.findById(Long.parseLong(id)).orElse(null);
        if (updatedMaterial != null) {
            updatedMaterial.setAttachments(material.getAttachments());
            updatedMaterial.setAuthor(material.getAuthor());
            updatedMaterial.setContent(material.getContent());
            updatedMaterial.setLanguage(material.getLanguage());
            updatedMaterial.setLink(material.getLink());
            updatedMaterial.setSection(material.getSection());
            updatedMaterial.setTitle(material.getTitle());
            updatedMaterial.setMonitorDate(material.getMonitorDate());
            materialRepo.save(updatedMaterial);
        }
        return updatedMaterial;
    }
}
