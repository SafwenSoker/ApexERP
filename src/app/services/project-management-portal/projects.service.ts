import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    // return Observable.create();
    return new Observable<Project[]>(observer => {
      observer.next([
        new Project(1, "Project 1", "Brief Description", [
          new GroupOfTasks("Group Of Tasks 1",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 2",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 3",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ])
        ], [], "#6f42c1"),
        new Project(2, "Project 2", "Brief Description", [
          new GroupOfTasks("Group Of Tasks 4",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 5",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ])
        ],[], "#00b8d4"),
        new Project(3, "Project 3", "Brief Description", [
          new GroupOfTasks("Group Of Tasks 6",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 7",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 8",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks("Group Of Tasks 9",new Date(), new Date(), new Date(), new Date(), [
            new Task(1, "Task Name", new Date(), 2, new Date(), new Date(), "Task Description", TaskStatus.DONE, [TaskTag.BUG, TaskTag.IMPROVEMENT], TaskUrgency.HIGH, "Something To do,Another Thing to do", 1, 1)
          ])
        ],[], "#fd7e14")
      ])
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

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.API_URL}/project/${id}`);
  }

  createProject(project: FormData): Observable<Project> {
    return this.http.post<Project>(`${this.API_URL}/project`, project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.API_URL}/project/${project.getId()}`, project);
  }

  deleteProject(id: string): Observable<Project> {
    return this.http.delete<Project>(`${this.API_URL}/project/${id}`);
  }

}
