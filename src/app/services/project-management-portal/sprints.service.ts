import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getSprints(){
    return this.http.get(`${this.API_URL}/sprints`);
  }

  getSprint(id: string){
    return this.http.get(`${this.API_URL}/sprint/${id}`);
  }

  newSprint(sprint: any){
    return this.http.post(`${this.API_URL}/sprint`, sprint);
  }

  updateSprint(id: string, sprint: any){
    return this.http.put(`${this.API_URL}/sprint/${id}`, sprint);
  }

  deleteSprint(id: string){
    return this.http.delete(`${this.API_URL}/sprint/${id}`);
  }
}
