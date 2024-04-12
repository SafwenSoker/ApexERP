import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Observable, catchError, map } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserHrInformationService {
  API_URL = "http://197.26.19.240:10000"
  constructor(private http: HttpClient) { }

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
    

    return this.http.get<UserHRInfo>(`${this.API_URL}/self-service/userhrinfo/e105ed86-bb83-4efd-99b0-7532b40a3282`);
  }

  updateUserHRInfo(user: UserHRInfo): Observable<UserHRInfo> {
    return this.http.put<UserHRInfo>(`${this.API_URL}/user-info/${user.getCin()}`, user);
  }

  deleteUserHRInfo(cin: UserHRInfo): Observable<UserHRInfo> {
    return this.http.delete<UserHRInfo>(`${this.API_URL}/user-info/${cin}`);
  }

}