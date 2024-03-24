import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/state/shared.actions';
import {
  addProject,
  addProjectSuccess,
  deleteProject,
  deleteProjectSuccess,
  getProject,
  getProjectSuccess,
  loadProjects,
  loadProjectsSuccess,
  updateProject,
  updateProjectSuccess,
} from './project.actions';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';

@Injectable()
export class ProjectsEffects {
  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService,
    private router: Router,
    private store: Store<AppState>
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
  addProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addProject),
      mergeMap((action) => {
        let timerInterval;
        // Swal.fire({
        //   title: 'Creating project...!',
        //   timerProgressBar: true,
        //   html: '<lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_7jdg5xgb.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop autoplay></lottie-player>',
        //   didOpen: () => {
        //     Swal.showLoading();
        //   }
        // }).then((result) => {
        //   /* Read more about handling dismissals below */
        //   if (result.dismiss === Swal.DismissReason.timer) {
        //     console.log('I was closed by the timer');
        //   }
        // });
        return this.projectsService.addProject(action.newProject).pipe(
          map((project) => {
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title:
            //     'Project ' + project.getName() + ' has been successfully created',
            //   showConfirmButton: false,
            //   html: 'Redirecting...',
            //   didOpen: () => {
            //     Swal.showLoading();
            //     // this.router.navigate(['project', project.name])
            //   },
            // }).then((result) => {
            //   /* Read more about handling dismissals below */
            //   if (result.dismiss === Swal.DismissReason.timer) {
            //     console.log('I was closed by the timer');
            //   }
            // });
            return addProjectSuccess({ project });
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
