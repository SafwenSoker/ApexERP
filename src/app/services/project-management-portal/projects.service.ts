import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Project } from 'src/app/models/project-management-portal/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URL = "http://197.26.19.240:9092"
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return Observable.create();
   
    return this.http.get<Project[]>(`${this.API_URL}/project-service/projects`).pipe(
      map((projects) => {
        console.log(projects)
        return projects;
      }),
      catchError((error) => {
        throw error;
      })
      )
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