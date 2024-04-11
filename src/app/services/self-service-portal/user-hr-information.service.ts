import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, catchError, map } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserHrInformationService {
  API_URL = "http://197.26.19.240:9091"
  constructor(private http: HttpClient, private keycloakService: KeycloakService) { }

  getUserHRinfos(managerId: number): Observable<UserHRInfo[]> {
    return this.http.get<UserHRInfo[]>(`${this.API_URL}/self-service/userhrinfo`).pipe(
      map((userinfos) => {
        return userinfos;
      }),
      catchError((error) => {
        throw error;
      })
    )
  }

  getUserHRInfo(): Observable<UserHRInfo> {
    let userId = this.keycloakService.getKeycloakInstance().subject;

    return this.http.get<UserHRInfo>(`${this.API_URL}/self-service/userhrinfo/${userId}`);
  }

  updateUserHRInfo(user: UserHRInfo): Observable<UserHRInfo> {
    return this.http.put<UserHRInfo>(`${this.API_URL}/user-info/${user.getCin()}`, user);
  }

  deleteUserHRInfo(cin: UserHRInfo): Observable<UserHRInfo> {
    return this.http.delete<UserHRInfo>(`${this.API_URL}/user-info/${cin}`);
  }

}