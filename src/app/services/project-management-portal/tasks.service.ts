import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(`${this.API_URL}/tasks`);
  }

  getTask(id: string) {
    return this.http.get(`${this.API_URL}/task/${id}`);
  }

  newTask(task: any) {
    return this.http.post(`${this.API_URL}/task`, task);
  }

  updateTask(id: string, task: any) {
    return this.http.put(`${this.API_URL}/task/${id}`, task);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.API_URL}/task/${id}`);
  }

}
