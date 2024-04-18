package server.task_manager.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import server.task_manager.server.dtos.SignInForm;
import server.task_manager.server.entities.User;
import server.task_manager.server.repositroies.UserRepositories;

@RestController
@RequestMapping("/sign-in")
public class SignInController {
    private final UserRepositories userRepositories;
    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public User signIn(@RequestBody SignInForm signInForm){
        User user = userRepositories.findByUsername(signInForm.getUsername()).orElseThrow();
        if(user.getPassword().equals(signInForm.getPassword())){
            return user;
        }
        return null;
    }

    @Autowired
    public SignInController(UserRepositories userRepositories) {
        this.userRepositories = userRepositories;
    }
}
