import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DaysOffRequest } from 'src/app/models/self-service-portal/days-off-request.model';

@Injectable({
  providedIn: 'root'
})
export class DayoffsService {

  API_URL ="http://localhost:8080/self-service/dayoffrequest"
  constructor(private http: HttpClient) { }

  newDaysOffRequest(daysOffRequest: DaysOffRequest){
    
    let newDayOffRequest = {
      "startDate": daysOffRequest.startDate,
      "endDate": daysOffRequest.endDate,
      "daysoffType": daysOffRequest.daysoffType,
      "status": "PENDING",
      "reason": daysOffRequest.reason,
      "userDto": {
        "userId": "e105ed86-bb83-4efd-99b0-7532b40a3282"
      }
    }
    return this.http.post(`${this.API_URL}`, newDayOffRequest);
  }

    getDaysOffRequests(): Observable<DaysOffRequest[]>{
    return this.http.get<DaysOffRequest[]>(`${this.API_URL}/e105ed86-bb83-4efd-99b0-7532b40a3282`);
  }

  getDaysOffRequest(id: string){
    return this.http.get(`${this.API_URL}/${id}`);
  }

  updateDaysOffRequest(id: string, daysOffRequest: DaysOffRequest){
    return this.http.put(`${this.API_URL}/${id}`, daysOffRequest);
  }

  deleteDaysOffRequest(id: string){
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
