package server.task_manager.server.repositroies;

import org.springframework.data.jpa.repository.JpaRepository;
import server.task_manager.server.entities.GroupEntity;

public interface GroupRepositories extends JpaRepository<GroupEntity, Long> {
}
