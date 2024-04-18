package server.task_manager.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.task_manager.server.dtos.SignUpForm;
import server.task_manager.server.entities.User;
import server.task_manager.server.repositroies.UserRepositories;

@RestController
@RequestMapping("/sign-up")
public class SignUpController {
    private final UserRepositories userRepositories;
    @PostMapping
    public User signUp(@RequestBody SignUpForm signUpForm){
        User user = new User();
        if(userRepositories.findByUsername(signUpForm.getUsername()).isEmpty()) {
            user.setPassword(signUpForm.getPassword());
            user.setUsername(signUpForm.getUsername());

            return userRepositories.save(user);
        }
        return null;
    }
    @Autowired
    public SignUpController(UserRepositories userRepositories) {
        this.userRepositories = userRepositories;
    }
}
