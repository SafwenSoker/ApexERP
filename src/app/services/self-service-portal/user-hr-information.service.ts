import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, catchError, map } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserHrInformationService {
  API_URL = "http://localhost:9090";
  corsHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });

  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  getUserHRinfos(managerId: number): Observable<UserHRInfo[]> {
    return this.http.get<UserHRInfo[]>(`${this.API_URL}/self-service/userhrinfo`, { headers: this.corsHeaders }).pipe(
      map((userinfos) => {
        return userinfos;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  getUserHRInfo(): Observable<UserHRInfo> {
    return this.http.get<UserHRInfo>(`${this.API_URL}/self-service/userhrinfo/${this.keycloakService.getKeycloakInstance().tokenParsed.sub}`, { headers: this.corsHeaders });
  }

  updateUserHRInfo(user: UserHRInfo): Observable<UserHRInfo> {
    return this.http.put<UserHRInfo>(`${this.API_URL}/user-info/${user.getCin()}`, user, { headers: this.corsHeaders });
  }

  deleteUserHRInfo(cin: UserHRInfo): Observable<UserHRInfo> {
    return this.http.delete<UserHRInfo>(`${this.API_URL}/user-info/${cin}`, { headers: this.corsHeaders });
  }
}
