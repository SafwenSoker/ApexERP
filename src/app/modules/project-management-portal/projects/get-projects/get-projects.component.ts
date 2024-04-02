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


interface EventItem {
  status?: string;
  hours?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
  projectName?: string;
}
@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrl: './get-projects.component.scss'
})


export class GetProjectsComponent implements OnInit, OnDestroy {
  events: EventItem[];
  events2: EventItem[];
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  projects!: Project[];
  private ngUnsubscribe = new Subject<void>();

  projectStatuses: any[];
  selectedProjectStatus: string;

  constructor(private store: Store<AppState>) {
    this.events = [
      { projectName: 'Instagram', status: 'Daily Meeting', hours: '10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', date: "Aug 20, 2023" },
      { projectName: 'Whatsapp', status: 'Retrospective', hours: '14:00', icon: 'pi pi-cog', color: '#673AB7', date: "Aug 20, 2023" },
      { projectName: 'Facebook', status: 'Sprint Planning', hours: '16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', date: "Aug 20, 2023" },
      { projectName: 'Instagram', status: 'One to one With manager', hours: '18:00', icon: 'pi pi-check', color: '#607D8B', date: "Aug 20, 2023" }
    ];

    this.events2 = [
      { projectName: 'Instagram', status: 'Daily Meeting', hours: '10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg', date: "Aug 20, 2023" },
      { projectName: 'Whatsapp', status: 'Retrospective', hours: '14:00', icon: 'pi pi-cog', color: '#673AB7', date: "Aug 20, 2023" },
      { projectName: 'Facebook', status: 'Sprint Planning', hours: '16:15', icon: 'pi pi-shopping-cart', color: '#FF9800', date: "Aug 20, 2023" },
      { projectName: 'Instagram', status: 'One to one With manager', hours: '18:00', icon: 'pi pi-check', color: '#607D8B', date: "Aug 20, 2023" }
    ];
  }
  ngOnInit() {
    this.store.dispatch(loadProjects());
    this.store.select(getProjects).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (projects) => {
        this.projects = projects;
      }
    );
    this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' }];
    this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };
    this.projectStatuses = [
      { label: 'Completed', value: 'completed', icon: "pi pi-fw pi-check", severity: "info" },
      { label: 'In Progress', value: 'in_progress', icon: "pi pi-fw pi-hourglass", severity: "info" }
    ];
    this.selectedProjectStatus = "None";
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}