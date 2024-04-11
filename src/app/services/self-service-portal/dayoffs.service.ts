import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DaysOffRequest } from 'src/app/models/self-service-portal/days-off-request.model';

@Injectable({
  providedIn: 'root'
})
export class DayoffsService {

  API_URL ="http://197.26.19.240:9092"
  constructor(private http: HttpClient) { }

  newDaysOffRequest(daysOffRequest: DaysOffRequest){
    return this.http.post(`${this.API_URL}/self-service/daysoffrequest`, daysOffRequest);
  }

    getDaysOffRequests(){
    return this.http.get(`${this.API_URL}/daysoff/requests`);
  }

  getDaysOffRequest(id: string){
    return this.http.get(`${this.API_URL}/daysoff/request/${id}`);
  }

  updateDaysOffRequest(id: string, daysOffRequest: DaysOffRequest){
    return this.http.put(`${this.API_URL}/daysoff/request/${id}`, daysOffRequest);
  }

  deleteDaysOffRequest(id: string){
    return this.http.delete(`${this.API_URL}/daysoff/request/${id}`);
  }

}
