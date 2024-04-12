import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Subject, catchError, map, mergeMap, of, switchMap, takeUntil } from 'rxjs';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';
import { GroupsOfTasksService } from 'src/app/services/project-management-portal/groups-of-tasks.service';
import { TasksService } from 'src/app/services/project-management-portal/tasks.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/state/shared.actions';
import {
  createGroupOfTasks,
  createGroupOfTasksSuccess,
  createProject,
  createProjectSuccess,
  createTask,
  createTaskSuccess,
  deleteGroupOfTasks,
  deleteGroupOfTasksSuccess,
  deleteProject,
  deleteProjectSuccess,
  deleteTask,
  deleteTaskSuccess,
  getGroupOfTasks,
  getGroupOfTasksSuccess,
  getProject,
  getProjectSuccess,
  getTask,
  getTaskSuccess,
  loadGroupsOfTasks,
  loadGroupsOfTasksSuccess,
  loadProjects,
  loadProjectsSuccess,
  loadTasks,
  loadTasksSuccess,
  updateGroupOfTasks,
  updateGroupOfTasksSuccess,
  updateProject,
  updateProjectSuccess,
  updateTask,
  updateTaskSuccess,
} from './project.actions';

import { MessageService,ConfirmationService } from 'primeng/api';
// import { getGroupsOfTasks } from './project.selector';
@Injectable()
export class ProjectsEffects{
  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private groupsOfTasksService: GroupsOfTasksService,
    private tasksService: TasksService,
    private router: Router,
    private store: Store<AppState>,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    
  ) {

  }
  // ngOnDestroy(): void {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }

  getProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProject),
      mergeMap((action) => {
        return this.projectsService.getProject(action.projectId).pipe(
          map((project) => {
            return getProjectSuccess({ project });
          })
        );
      })
    );
  });
  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProjects),
      mergeMap((action) => {
        return this.projectsService.getProjects().pipe(
          map((projects) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadProjectsSuccess({ projects });
          }),
          catchError((error) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));            
            return of(error);
          })
        );
      })
    );
  });
  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createProject),
      mergeMap((action) => {
        let timerInterval;
        this.messageService.add({severity:'info', summary: 'Info', detail: 'Creating Project'});
        return this.projectsService.createProject(action.title, action.description, action.color, action.developers).pipe(
          map((project) => {
            
            return createProjectSuccess({ project });
          })
        );
      })
    );
  });

  updateProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateProject),
      switchMap((action) => {
        return this.projectsService.updateProject(action.updatedProject).pipe(
          map((project) => {
            return updateProjectSuccess({ project });
          })
        );
      })
    );
  });  

  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteProject),
      switchMap((action) => {
        return this.projectsService.deleteProject(action.projectId).pipe(
          map((project) => {
            return deleteProjectSuccess({ project });
          })
        );
      })
    );
  });

  //  Create All effects for groupOFtASKS and tasks
  createGroupOfTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createGroupOfTasks),
      mergeMap((action) => {
        return this.groupsOfTasksService.createGroupOfTasks(action.name, action.startDate, action.estimatedEndDate, action.demoDate, action.deliveredDate, action.project, action.developers).pipe(
          map((groupOfTasks) => {
            console.log(groupOfTasks)
            return createGroupOfTasksSuccess({ groupOfTasks });
          })
        );
      })
    );
  });

  updateGroupOfTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateGroupOfTasks),
      switchMap((action) => {
        return this.groupsOfTasksService.updateGroupOfTasks(action.updatedGroupOfTasks).pipe(
          map((groupOfTasks) => {
            return updateGroupOfTasksSuccess({ groupOfTasks });
          })
        );
      })
    );
  });

  deleteGroupOfTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteGroupOfTasks),
      switchMap((action) => {
        return this.groupsOfTasksService.deleteGroupOfTasks(action.groupOfTasksId).pipe(
          map((groupOfTasks) => {
            return deleteGroupOfTasksSuccess({ groupOfTasks });
          })
        );
      })
    );
  });

  // getGroupOfTasks$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(getGroupOfTasks),
  //     mergeMap((action) => {
  //       return this.store.select(getGroupOfTasksSelector(action.groupOfTasksId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
  //         (groupOfTasks) => {
  //           return getGroupOfTasksSuccess({ groupOfTasks });
  //         }
  //       );
  //     })
  //   );
  // });

  loadGroupsOfTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadGroupsOfTasks),
      mergeMap((action) => {
        return this.groupsOfTasksService.getGroupsOfTasks(action.projectId).pipe(
          map((groupsOfTasks) => {
            console.log(groupsOfTasks)
            return loadGroupsOfTasksSuccess({ groupsOfTasks });
          })
        );
      })
    );
  });

  
  getTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getTask),
      mergeMap((action) => {
        return this.tasksService.getTask(action.taskId).pipe(
          map((task) => {
            return getTaskSuccess({ task });
          })
        );
      })
    );
  });

  loadTasks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadTasks),
      mergeMap((action) => {
        return this.tasksService.getTasks(action.groupOfTasksId).pipe(
          map((tasks) => {
            return loadTasksSuccess({ tasks });
          })
        );
      })
    );
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTask),
      mergeMap((action) => {
        return this.tasksService.createTask(action.name, action.deadline, action.startDate, action.endDate, action.description, action.projectId, action.groupOfTaskId, action.taskStatus, action.taskTags, action.taskUrgency, action.employeeId).pipe(
          map((task) => {
            return createTaskSuccess({ task });
          })
        );
      })
    );
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTask),
      switchMap((action) => {
        return this.tasksService.updateTask(action.updatedTask).pipe(
          map((task) => {
            return updateTaskSuccess({ task });
          })
        );
      })
    );
  });

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTask),
      switchMap((action) => {
        return this.tasksService.deleteTask(action.taskId).pipe(
          map((task) => {
            return deleteTaskSuccess({ task });
          })
        );
      })
    );
  });
}
