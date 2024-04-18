package server.task_manager.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import server.task_manager.server.dtos.TaskDto;
import server.task_manager.server.entities.GroupEntity;
import server.task_manager.server.entities.Task;
import server.task_manager.server.repositroies.GroupRepositories;
import server.task_manager.server.repositroies.TaskRepositories;

import java.util.List;

@RestController
@RequestMapping("/tasks")
public class TaskController {
    private final TaskRepositories taskRepositories;
    private final GroupRepositories groupRepositories;
    @Autowired
    public TaskController(TaskRepositories taskRepositories, GroupRepositories groupRepositories) {
        this.taskRepositories = taskRepositories;
        this.groupRepositories = groupRepositories;
    }

    @PostMapping
    public Task create(@RequestBody TaskDto taskDto){
        Task task = new Task();
        GroupEntity group = groupRepositories.findById(taskDto.getGroupId()).orElseThrow();

        task.setDescription(taskDto.getDescription());
        task.setTitle(taskDto.getTitle());
        task.setDateOfStart(taskDto.getDateOfStart());
        task.setDateOfEnd(taskDto.getDateOfEnd());
        task.setGroup(group);

        return taskRepositories.save(task);
    }
    @GetMapping("/group/{idGroup}")
    public List<Task> tasks(@PathVariable Long idGroup){
        return taskRepositories.findTasksByGroupId(idGroup);
    }
}
