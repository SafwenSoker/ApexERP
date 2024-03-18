import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get(`${this.API_URL}/events`);
  }

  getEvent(id: string){
    return this.http.get(`${this.API_URL}/event/${id}`);
  }

  newEvent(event: ){
    return this.http.post(`${this.API_URL}/event`, event);
  }

  updateEvent(id: string, event: any){
    return this.http.put(`${this.API_URL}/event/${id}`, event);
  }

  deleteEvent(id: string){
    return this.http.delete(`${this.API_URL}/event/${id}`);
  }

  
}
