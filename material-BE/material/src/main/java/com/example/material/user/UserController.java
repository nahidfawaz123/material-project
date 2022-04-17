package com.example.material.user;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
    private final UserService userService ;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public List<User> getUsers(){
        return userService.getUsers();}

    @GetMapping("/user/{id}")
    public User getUserByid(@PathVariable String id ){
        return userService.getUsersById(id);}

    @GetMapping("/login")
    public User login(@RequestBody User user){return userService.Login(user);}

    @PostMapping("/register")
    public String register(@RequestBody User user){return userService.register(user);}

    @PutMapping("/update/{id}")
    public String updateUser(@RequestBody User user , @PathVariable String id)throws IOException {
        return userService.updateUser(id,user);}
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id ){return userService.deleteUser(id);}


}
