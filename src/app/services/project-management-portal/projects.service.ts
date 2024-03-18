import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(`${this.API_URL}/projects`);
  }

  getProject(id: string){
    return this.http.get(`${this.API_URL}/project/${id}`);
  }

  newProject(project: any){
    return this.http.post(`${this.API_URL}/project`, project);
  }

  updateProject(id: string, project: any){
    return this.http.put(`${this.API_URL}/project/${id}`, project);
  }

  deleteProject(id: string){
    return this.http.delete(`${this.API_URL}/project/${id}`);
  }

}
