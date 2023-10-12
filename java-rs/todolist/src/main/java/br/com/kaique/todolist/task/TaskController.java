package br.com.kaique.todolist.task;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.kaique.todolist.utils.Utils;
import jakarta.servlet.http.HttpServletRequest;
import lombok.var;

@RestController
@RequestMapping("/tasks")
public class TaskController {

  @Autowired
  ITaskRepository taskRepository;
  
  @PostMapping("/")
  public ResponseEntity<String> createTask(@RequestBody TaskModel taskModel, HttpServletRequest req) {
    String userId = req.getAttribute("userId").toString();
    taskModel.setId(UUID.fromString(userId));

    LocalDateTime currentDate = LocalDateTime.now();

    if(taskModel.getStart_at().isEqual(taskModel.getEnd_at())) {
      return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body("A data inicial/data de término não podem ser iguais!");
    } else if(currentDate.isAfter(taskModel.getStart_at()) || currentDate.isAfter(taskModel.getEnd_at())) {
      return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body("A data inicial/data de término deverá ser maior que a data atual!");
    } else if(taskModel.getStart_at().isAfter(taskModel.getEnd_at())) {
      return ResponseEntity
        .status(HttpStatus.BAD_REQUEST)
        .body("A data de término deverá ser maior que a data inicial!");
    }

    this.taskRepository.save(taskModel);

    return ResponseEntity.status(HttpStatus.CREATED).body("Tarefa criada com sucesso!");
  }

  @GetMapping("/")
  public ResponseEntity<TaskModel> getTasks(HttpServletRequest req) {
    String userId = req.getAttribute("userId").toString();
    var tasks = this.taskRepository.findByUserId(UUID.fromString(userId));

    if(tasks == null) {
      return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    return ResponseEntity.status(HttpStatus.ACCEPTED).body(tasks);
  }

  @PutMapping("/{id}")
  public ResponseEntity<String> updateTask(@RequestBody TaskModel taskModel, @PathVariable UUID id, HttpServletRequest req) {

    var task = this.taskRepository.findById(id).orElse(null);

    if(task == null) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tarefa não existe!");
    }

    Utils.copyNonNullProperties(taskModel, task);
    this.taskRepository.save(task);

    return ResponseEntity.status(HttpStatus.OK).body("Tarefa atualizada com sucesso!");
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deleteTask(@PathVariable UUID id) {
    boolean taskExist = this.taskRepository.findById(id).isPresent(); 

    if(!taskExist) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Tarefa não existe!");
    }

    this.taskRepository.deleteById(id);
    return ResponseEntity.status(HttpStatus.OK).body("Tarefa deletado com sucesso!");  
  }

}
