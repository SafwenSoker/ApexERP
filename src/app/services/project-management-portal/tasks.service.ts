import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "http://197.26.19.240:9092"
  constructor(private http: HttpClient) { }

  getTasks(groupOfTasksId: number) : Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}/project-service/tasks`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/project-service/tasks/${id}`);
  }

  createTask(task: FormData): Observable<Task> {
    return this.http.post<Task>(`${this.API_URL}/project-service/tasks`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return new Observable<Task>(observer => {
      observer.next(task)
      observer.complete()
    })
    return this.http.put<Task>(`${this.API_URL}/task/${task.getId()}`, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.API_URL}/project-service/tasks/${id}`);
  }

}
