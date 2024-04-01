import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getTasks(groupOfTasksId: number) : Observable<Task[]> {
    const tasks: Task[] = [
      new Task(1, "Task 1", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 1),
      new Task(2, "Task 2", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 2),
      new Task(3, "Task 3", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 3),
      new Task(4, "Task 4", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 4),
      new Task(5, "Task 5", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 5),
      new Task(6, "Task 6", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 6),
      new Task(7, "Task 7", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 7),
      new Task(8, "Task 8", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 8),
      new Task(9, "Task 9", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 9),
      new Task(10, "Task 10", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 10),
      new Task(11, "Task 11", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 11),
      new Task(12, "Task 12", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 12),
      new Task(13, "Task 13", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 13),
      new Task(14, "Task 1", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 1),
      new Task(15, "Task 2", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 2),
      new Task(16, "Task 3", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 3),
      new Task(17, "Task 4", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 4),
      new Task(18, "Task 5", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 5),
      new Task(19, "Task 6", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 6),
      new Task(20, "Task 7", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 7),
      new Task(21, "Task 8", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 8),
      new Task(22, "Task 9", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 9),
      new Task(23, "Task 10", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 10),
      new Task(24, "Task 11", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 11),
      new Task(25, "Task 12", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 12),
      new Task(26, "Task 13", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 13),
      new Task(27, "Task 1", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 1),
      new Task(28, "Task 2", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 2),
      new Task(29, "Task 3", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 3),
      new Task(30, "Task 4", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 4),
      new Task(31, "Task 5", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 5),
      new Task(32, "Task 6", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 6),
      new Task(33, "Task 7", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 7),
      new Task(34, "Task 8", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 8),
      new Task(35, "Task 9", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 9),
      new Task(36, "Task 10", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 10),
      new Task(37, "Task 11", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 11),
      new Task(38, "Task 12", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 12),
      new Task(139, "Task 13", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, 1, 13),
  ]
    return new Observable<Task[]>(observer => {
      observer.next(tasks.filter((task) => task.getGroupOfTasksId() == groupOfTasksId))
      observer.complete()
    })
    return this.http.get<Task[]>(`${this.API_URL}/tasks`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/task/${id}`);
  }

  createTask(task: FormData): Observable<Task> {
    return this.http.post<Task>(`${this.API_URL}/task`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return new Observable<Task>(observer => {
      observer.next(task)
      observer.complete()
    })
    return this.http.put<Task>(`${this.API_URL}/task/${task.getId()}`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}/task/${id}`);
  }

}
