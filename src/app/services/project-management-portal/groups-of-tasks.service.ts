import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';

interface UserDto{
  name: string,
  userId: string
}
@Injectable({
  providedIn: 'root'
})
export class GroupsOfTasksService {

  API_URL = "http://localhost:9091/project-service/task-groups"
  constructor(private http: HttpClient) { }

  getGroupsOfTasks(projectId: number): Observable<GroupOfTasks[]> {

    return this.http.get<GroupOfTasks[]>(`${this.API_URL}`).pipe(
      map((groupsOfTasks) => {
        return groupsOfTasks.filter((groupOfTasks) => groupOfTasks.project.id == projectId)
      }),
      catchError((error) => {
        throw error;
      })
    )
  }

  // getGroupOfTasks(id: number): Observable<GroupOfTasks> {
  //   return this.http.get<GroupOfTasks>(`${this.API_URL}/groups-of-tasks/${id}`);
  // }

  createGroupOfTasks(name: string, startDate: Date, estimatedEndDate: Date, demoDate: Date, deliveredDate: Date, project: number, developers: UserDto[]): Observable<GroupOfTasks> {
    let developersDto = []
    developers.forEach((developer) => {
      developersDto.push(
        {
          "userDto" : developer
        }
      )
    })
    let groupOfTasks = {
      "name": name,
      "startDate": startDate,
      "estimatedEndDate": estimatedEndDate,
      "demoDate": demoDate,
      "deliveredDate": deliveredDate,
      "project": {
        "id": project,
        "developers":developersDto,
        "documents": [],
        "groupsOfTasks": []
      },
      "tasks": []
    }
    console.log(groupOfTasks)
    return this.http.post<GroupOfTasks>(`${this.API_URL}`, groupOfTasks);
  }

  updateGroupOfTasks(project: GroupOfTasks): Observable<GroupOfTasks> {
    return this.http.put<GroupOfTasks>(`${this.API_URL}/project-service/task-groups/${project.getId()}`, project);
  }

  deleteGroupOfTasks(id: number): Observable<GroupOfTasks> {
    return this.http.delete<GroupOfTasks>(`${this.API_URL}/project-service/task-groups/${id}`);
  }

}
