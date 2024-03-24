import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getTask } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { loadProjects } from '../../state/project.actions';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent implements OnInit, OnDestroy{
  task!: Task;
  projectName: string;
  groupOfTasksName: string;
  taskName: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  private ngUnsubscribe = new Subject<void>();


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('project');
      this.groupOfTasksName = params.get('groupOfTasks');
      this.taskName = params.get('task');
      this.projectName = this.projectName.split("-").join(" ");
      this.groupOfTasksName = this.groupOfTasksName.split("-").join(" ");
      this.taskName = this.taskName.split("-").join(" ");
      this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' }, { label: this.projectName, routerLink: '/project-management-portal/my-projects/' + params.get('project') },{ label: this.groupOfTasksName, routerLink: '/project-management-portal/my-projects/' + params.get('project') + "/group" + params.get('groupOfTasks') },{ label: this.taskName, routerLink: '/project-management-portal/my-projects/' + params.get('project') + "/group" + params.get('groupOfTasks')+"/task"+params.get("task") }];
      this.store.select(getTask(this.projectName, this.groupOfTasksName, this.taskName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (task) => {
          this.task = task;
        }
      );
    })
    this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
