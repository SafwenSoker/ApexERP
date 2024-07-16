import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from 'src/app/models/project-management-portal/status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

interface IEmployee{
  nom: string,
  prenom: string,
  poste: string
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  API_URL = "http://localhost:8080/project-service/tasks"
  constructor(private http: HttpClient) { }

  getTasks(groupOfTasksId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.API_URL}`);
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.API_URL}/${id}`);
  }

  createTask(name: string, deadline: Date, startDate: Date, endDate: Date, description: string, projectId: number, groupOfTaskId: number, taskStatus: Status, taskTags: TaskTag[], taskUrgency: TaskUrgency, employeeId: string): Observable<Task> {
    let taskDto = {
      "name": name,
      "deadLine": deadline,
      "startDate": startDate,
      "endDate": endDate,
      "description": description,
      "taskStatus": taskStatus,
      "taskTag": taskTags.join(','),
      "taskUrgency": taskUrgency,
      "employee": {
        "userDto": {
          "userId": employeeId
        }
      },
      "project": {
        "id": projectId,
        "documents": [],
        "groupsOfTasks": [],
        "developers": [
          {
            "userDto": {
              "userId": employeeId
            }
          }
        ],
      },
      "taskGroupDto": {
        "id": groupOfTaskId,
        "tasks": [],
        "project": {
          "id": projectId,
          "developers": [
            {
              "userDto": {
                "userId": employeeId
              }
            }
          ],
          "documents": [],
          "groupsOfTasks": []
        }
      },
    }

    return this.http.post<Task>(`${this.API_URL}`, taskDto);
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

  searchForBestCandidate(description: string):Observable<IEmployee>{
    return this.http.post<IEmployee>("http://197.26.19.240:8000/trouver-employe?description_tache="+description, {});
  }
}
