package server.task_manager.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import server.task_manager.server.entities.User;
import server.task_manager.server.repositroies.UserRepositories;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepositories userRepositories;
    @Autowired
    public UserController(UserRepositories userRepositories) {
        this.userRepositories = userRepositories;
    }

    @GetMapping("/{username}")
    public User getByUsername(@PathVariable String username){
        return userRepositories.findByUsername(username).orElseThrow();
    }
}
