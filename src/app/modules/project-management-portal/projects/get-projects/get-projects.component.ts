import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';


import { Store } from '@ngrx/store';
import { loadProjects } from '../../state/project.actions';
import { getProjects } from '../../state/project.selector';
import { AppState } from 'src/app/store/app.state';



@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrl: './get-projects.component.scss'
})
export class GetProjectsComponent implements OnInit, OnDestroy {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  projects!: Project[];
  private ngUnsubscribe = new Subject<void>();
  constructor(private store: Store<AppState>){}
  ngOnInit() {
      this.store.dispatch(loadProjects());
      this.store.select(getProjects).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (projects) => {
          this.projects = projects;
        }
      );
      this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' }];
      this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}