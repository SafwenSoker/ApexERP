import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsOfTasksService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getGroupsOfTasks(projectId: number): Observable<GroupOfTasks[]> {
    const groupsOfTasks: GroupOfTasks[] = [
      new GroupOfTasks(1,"Group Of Tasks 1",new Date(), new Date(), new Date(), new Date(), [],1),
      new GroupOfTasks(2,"Group Of Tasks 2",new Date(), new Date(), new Date(), new Date(), [],2),
      new GroupOfTasks(3,"Group Of Tasks 3",new Date(), new Date(), new Date(), new Date(), [],3),
      new GroupOfTasks(4,"Group Of Tasks 4",new Date(), new Date(), new Date(), new Date(), [],1),
      new GroupOfTasks(5,"Group Of Tasks 5",new Date(), new Date(), new Date(), new Date(), [],2),
      new GroupOfTasks(6,"Group Of Tasks 6",new Date(), new Date(), new Date(), new Date(), [],3),
      new GroupOfTasks(7,"Group Of Tasks 7",new Date(), new Date(), new Date(), new Date(), [],1),
      new GroupOfTasks(8,"Group Of Tasks 8",new Date(), new Date(), new Date(), new Date(), [],2),
      new GroupOfTasks(9,"Group Of Tasks 9",new Date(), new Date(), new Date(), new Date(), [],3)
  ];
    return new Observable<GroupOfTasks[]>(observer => {
      observer.next(groupsOfTasks.filter((groupOfTasks) => groupOfTasks.getProjectId() === projectId))
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

  getGroupOfTasks(id: number): Observable<GroupOfTasks> {
    return this.http.get<GroupOfTasks>(`${this.API_URL}/groups-of-tasks/${id}`);
  }

  createGroupOfTasks(project: FormData): Observable<GroupOfTasks> {
    return this.http.post<GroupOfTasks>(`${this.API_URL}/project`, project);
  }

  updateGroupOfTasks(project: GroupOfTasks): Observable<GroupOfTasks> {
    return this.http.put<GroupOfTasks>(`${this.API_URL}/project/${project.getId()}`, project);
  }

  deleteGroupOfTasks(id: number): Observable<GroupOfTasks> {
    return this.http.delete<GroupOfTasks>(`${this.API_URL}/project/${id}`);
  }

}
