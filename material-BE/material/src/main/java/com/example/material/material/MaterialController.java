package com.example.material.material;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("material")
@CrossOrigin(origins = "http://localhost:4200")

public class MaterialController {
    private final MaterialService materialService;
    @Autowired

    public MaterialController(MaterialService materialService) {
        this.materialService = materialService;
    }
    //fetch data use the title
    @GetMapping("/{title}")
    public Material getMaterial(@PathVariable String title){
        return materialService.getMaterial(title);
    }
    //fetch data use the id
    @GetMapping("id/{id}")
    public Material getMaterialById(@PathVariable String id){
        return materialService.getMaterialById(id);
    }
    //fetch all data
    @GetMapping
    public List< Material > getMaterials(){
        return materialService.getMaterials();

    }
  //post data with validation exception the file (pdf , png)
    @PostMapping("/add")
    public void addMaterial(@RequestBody Material material){
        int length = material.getAttachments().length();
        if (material.getAttachments().substring(length-3).equals("pdf")||material.getAttachments().substring(length-3).equals("png")){
             materialService.addMaterial(material);
        }
    }

}
