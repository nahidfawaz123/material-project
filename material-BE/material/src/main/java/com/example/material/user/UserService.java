package com.example.material.user;
import org.springframework.stereotype.Service;
import java.io.IOException;
import java.util.List;

@Service
public class UserService {
    private final UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }
    public List<User> getUsers() {
        return userRepo.findAllUserStatus();
    }
    public User getUsersById(String id) {
        Long user_id = Long.parseLong(id);
        User user = userRepo.findById(user_id).orElse(null);
        return user ;
    }

    public User Login(User data) {
        User user = userRepo.findByUsername(data.getUsername());
        if (user.getStatus().equals("ACTIVE")){
        if (user.getPassword().equals(data.getPassword())) {
            return user;}
        else
            return null;
        }
        else
            return null;
    }
    public String  register(User data) {
        if (data.getUsername() != null && data.getEmail() != null && data.getPassword() != null) {
            if (userRepo.findByUsername(data.getUsername()) == null && userRepo.findByEmail(data.getEmail()) == null) {
                data.setStatus("ACTIVE");
                userRepo.save(data);
                return "the account recording successfully";
            } else {return "username or password is exist  "; }
        } else {return "error";}
    }

    public String updateUser(String id, User data)  throws IOException {
        Long user_id = Long.parseLong(id);
        User user = userRepo.findById(user_id).orElse(null);
        if ( userRepo.findByUsername(data.getUsername()) == null && userRepo.findByEmail(data.getEmail()) == null){
                user.setUsername(data.getUsername());
                user.setFullName(data.getFullName());
                user.setPassword(data.getPassword());
                user.setEmail(data.getEmail());
                userRepo.save(user);
                return "the account recording successfully";
            }else  if ((user.getId() ==userRepo.findByUsername(user.getUsername()).getId()
                && user.getId() ==userRepo.findByEmail(user.getEmail()).getId())){
                user.setUsername(data.getUsername());
                user.setFullName(data.getFullName());
                user.setPassword(data.getPassword());
                user.setEmail(data.getEmail());
            userRepo.save(user);
                return "the account recording successfully";
        }
        else {
            return  "error";
        }
    }

    public String deleteUser(String id){
        Long user_id = Long.parseLong(id);
        User user = userRepo.findById(user_id).orElse(null);
            user.setStatus("DELETED");
            userRepo.save(user);
            return "deleted";}
}
