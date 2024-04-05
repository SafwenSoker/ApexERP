import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';

@Injectable({
  providedIn: 'root'
})
export class UserHrInformationService {
  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getUserHRinfos(managerId: number): Observable<UserHRInfo[]> {
    // return Observable.create();
    return new Observable<UserHRInfo[]>(observer => {
      observer.next([new UserHRInfo("11223344",123,new Date(),new Date(), 12,"223","1223",1240,1400,123123123),new UserHRInfo("11223344",123,new Date(),new Date(), 12,"223","1223",1240,1400,123123123)])
      observer.complete()
    })
    // return this.http.get<Project[]>(`${this.API_URL}/projects`).pipe(
    //   map((projects) => {
    //     return projects;
    //   }),
    //   catchError((error) => {
    //     throw error;
    //   })
    //   )
  }

  getUserHRInfo(cin: number): Observable<UserHRInfo> {
    return new Observable<UserHRInfo>(observer => {
      observer.next(new UserHRInfo("11223344",123,new Date(),new Date(), 12,"223","1223",1240,1400,123123123))
      observer.complete()
      ;})
    // return this.http.get<UserHRInfo>(`${this.API_URL}/user-info/${id}`);
  }

  updateUserHRInfo(user: UserHRInfo): Observable<UserHRInfo> {
    return this.http.put<UserHRInfo>(`${this.API_URL}/user-info/${user.getCin()}`, user);
  }

  deleteUserHRInfo(cin: UserHRInfo): Observable<UserHRInfo> {
    return this.http.delete<UserHRInfo>(`${this.API_URL}/user-info/${cin}`);
  }

}