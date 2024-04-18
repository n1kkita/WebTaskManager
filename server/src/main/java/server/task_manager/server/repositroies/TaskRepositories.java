package server.task_manager.server.repositroies;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import server.task_manager.server.entities.Task;

import java.util.List;

@Repository
public interface TaskRepositories extends JpaRepository<Task, Long> {
    List<Task> findTasksByGroupId(Long idGroup);
}
