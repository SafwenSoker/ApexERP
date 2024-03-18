import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getBenefits(){
    return this.http.get(`${this.API_URL}/benefits`);
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
}
