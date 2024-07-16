import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Project } from 'src/app/models/project-management-portal/project.model';


interface IEmployee{
  name: string,
  userId: string
}
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URL = "http://localhost:9091/project-service/projects"
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return Observable.create();
   
    return this.http.get<Project[]>(`${this.API_URL}`).pipe(
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
    return this.http.get<Project>(`${this.API_URL}/${id}`);
  }

  createProject(title: string, description: string, color: string, developers: IEmployee[]): Observable<Project> {
    let developersDto = []
    developers.forEach((developer) => {
      developersDto.push(
        {
          "userDto" : developer
        }
      )
    })
    
    let newProject = {
      "title": title,
      "description": description,
      "developers": developersDto,
      "groupsOfTasks": [],
      "status": "IN_PROGRESS",
      "color": color,
      "documents": []
    }
    console.log(newProject)
    return this.http.post<Project>(`${this.API_URL}`,  newProject);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.API_URL}/${project.getId()}`, project);
  }

  deleteProject(id: number): Observable<Project> {
    return this.http.delete<Project>(`${this.API_URL}/${id}`);
  }

}