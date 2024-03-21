import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BenefitRequest } from 'src/app/models/self-service-portal/benefit-request';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getBenefits(): Observable<Benefit[]>{
    return this.http.get<Benefit[]>(`${this.API_URL}/benefits`);
  }

  getBenefit(id: string){
    return this.http.get(`${this.API_URL}/benefit/${id}`);
  }

  newBenefit(benefit: any){
    return this.http.post(`${this.API_URL}/benefit`, benefit);
  }

  updateBenefit(id: string, benefit: any){
    return this.http.put(`${this.API_URL}/benefit/${id}`, benefit);
  }

  deleteBenefit(id: string){
    return this.http.delete(`${this.API_URL}/benefit/${id}`);
  }

  getBenefitsRequests():Observable<BenefitRequest[]>{
    return this.http.get<BenefitRequest[]>(`${this.API_URL}/benefits-requests`);
  }

  acceptBenefitRequest(id: string){
    return this.http.put(`${this.API_URL}/benefits-requests/accept/${id}`, {});
  }

  rejectBenefitRequest(id: string){
    return this.http.put(`${this.API_URL}/benefits-requests/reject/${id}`, {});
  }
}
