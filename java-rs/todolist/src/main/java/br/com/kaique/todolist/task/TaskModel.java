package br.com.kaique.todolist.task;

import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity(name = "tb_tasks")
public class TaskModel {
  
  @Id
  @GeneratedValue(generator = "UUID")
  private UUID id;

  @Column(length = 50)
  private String title;
  private String description;

  @CreationTimestamp
  private LocalDateTime start_at;
  private LocalDateTime end_at;

  @Enumerated(EnumType.STRING)
  private Priority priority;

  private UUID userId;

  @CreationTimestamp
  private LocalDateTime created_at;
}

enum Priority {
  BAIXA, MEDIA, ALTA;
}