import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/state/shared.actions';
import {
  createProject,
  createProjectSuccess,
  deleteProject,
  deleteProjectSuccess,
  getProject,
  getProjectSuccess,
  loadProjects,
  loadProjectsSuccess,
  updateProject,
  updateProjectSuccess,
} from './project.actions';

import { MessageService,ConfirmationService } from 'primeng/api';
@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private router: Router,
    private store: Store<AppState>,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  getProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getProject),
      mergeMap((action) => {
        return this.projectsService.getProject(action.projectName).pipe(
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
        return this.projectsService.createProject(action.newProject).pipe(
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
}
