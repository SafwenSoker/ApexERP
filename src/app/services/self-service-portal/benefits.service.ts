import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable } from 'rxjs';
import { BenefitRequest } from 'src/app/models/self-service-portal/benefit-request';
import { Benefit } from 'src/app/models/self-service-portal/benefit.class';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  API_URL = "http://localhost:8080/self-service"
  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  getBenefits(): Observable<Benefit[]>{
    return this.http.get<Benefit[]>(`${this.API_URL}/benefit`);
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

  newBenefitRequest(benefitId: number, motivation: string){
    let request = {
      "employee": {
        "userId": "e105ed86-bb83-4efd-99b0-7532b40a3282"
      },
      "motivation": motivation,
      "benefitDto": {
        "id": benefitId
      }
    }
    return this.http.post(`${this.API_URL}/benefitRequest`, request);
  }
  getBenefitsRequestsByEmployee():Observable<BenefitRequest[]>{
    return this.http.get<BenefitRequest[]>(`${this.API_URL}/benefits-requests/benefitRequestByManager/e105ed86-bb83-4efd-99b0-7532b40a3282`);
  }

  getBenefitsRequestsByManager():Observable<BenefitRequest[]>{
    return this.http.get<BenefitRequest[]>(`${this.API_URL}/benefitRequestByManager/${this.keycloakService.getKeycloakInstance().tokenParsed.sub}`);
  }

  acceptBenefitRequest(id: string){
    return this.http.put(`${this.API_URL}/benefits-requests/accept/${id}`, {});
  }

  rejectBenefitRequest(id: string){
    return this.http.put(`${this.API_URL}/benefits-requests/reject/${id}`, {});
  }
}
