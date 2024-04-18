package server.task_manager.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import server.task_manager.server.dtos.GroupDto;
import server.task_manager.server.entities.GroupEntity;
import server.task_manager.server.entities.User;
import server.task_manager.server.repositroies.GroupRepositories;
import server.task_manager.server.repositroies.UserRepositories;

@RestController
@RequestMapping("/groups")
public class GroupController {
    private final GroupRepositories groupRepositories;
    private final UserRepositories userRepositories;
    @Autowired
    public GroupController(GroupRepositories groupRepositories, UserRepositories userRepositories) {
        this.groupRepositories = groupRepositories;
        this.userRepositories = userRepositories;
    }

    @PostMapping
    @Transactional
    public GroupEntity save(@RequestBody GroupDto groupDto){
        GroupEntity groupEntity = new GroupEntity();
        User user = userRepositories.findByUsername(groupDto.getOwnerUsername()).orElseThrow();

        groupEntity.setName(groupDto.getName());
        groupEntity.setOwner(user);
        groupEntity.getUsers().add(user);

        user.getOwnerGroups().add(groupEntity);
        user.getGroups().add(groupEntity);

        return  groupRepositories.save(groupEntity);

    }
}
