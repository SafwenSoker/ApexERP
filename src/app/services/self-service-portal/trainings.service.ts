import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getTrainings(){
    return this.http.get(`${this.API_URL}/trainings`);
  }

  getTraining(id: string){
    return this.http.get(`${this.API_URL}/training/${id}`);
  }

  newTraining(training: Document){
    return this.http.post(`${this.API_URL}/training`, training);
  }

  updateTraining(id: string, training: Document){
    return this.http.put(`${this.API_URL}/training/${id}`, training);
  }

  deleteTraining(id: string){
    return this.http.delete(`${this.API_URL}/training/${id}`);
  }

}
