import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';

@Injectable({
  providedIn: 'root'
})
export class GroupsOfTasksService {

  API_URL = "http://197.26.19.240:9092"
  constructor(private http: HttpClient) { }

  getGroupsOfTasks(projectId: number): Observable<GroupOfTasks[]> {

    return this.http.get<GroupOfTasks[]>(`${this.API_URL}/project-service/task-groups`).pipe(
      map((groupsOfTasks) => {
        return groupsOfTasks;
      }),
      catchError((error) => {
        throw error;
      })
      )
  }

  // getGroupOfTasks(id: number): Observable<GroupOfTasks> {
  //   return this.http.get<GroupOfTasks>(`${this.API_URL}/groups-of-tasks/${id}`);
  // }

  createGroupOfTasks(project: FormData): Observable<GroupOfTasks> {
    return this.http.post<GroupOfTasks>(`${this.API_URL}/project-service/task-groups`, project);
  }

  updateGroupOfTasks(project: GroupOfTasks): Observable<GroupOfTasks> {
    return this.http.put<GroupOfTasks>(`${this.API_URL}/project-service/task-groups/${project.getId()}`, project);
  }

  deleteGroupOfTasks(id: number): Observable<GroupOfTasks> {
    return this.http.delete<GroupOfTasks>(`${this.API_URL}/project-service/task-groups/${id}`);
  }

}
