import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return Observable.create();
    return new Observable<Project[]>(observer => {
      observer.next([
        new Project(1, "Project 1", "Brief Description", []),
        new Project(2, "Project 2", "Brief Description", []),
        new Project(3, "Project 3", "Brief Description", [])
      ])
      observer.complete()
    })
    // return this.http.get<Project[]>(`${this.API_URL}/projects`).pipe(
    //   map((projects) => {
    //     return projects;
    //   }),
    //   catchError((error) => {
    //     throw error;
    //   })
    //   )
  }

  getProject(id: number): Observable<Project> {
    return this.http.get<Project>(`${this.API_URL}/project/${id}`);
  }

  createProject(project: FormData): Observable<Project> {
    return this.http.post<Project>(`${this.API_URL}/project`, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.API_URL}/project/${project.getId()}`, project);
  }

  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.API_URL}/project/${id}`);
  }

}
