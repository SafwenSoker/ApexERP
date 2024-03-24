import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { loadProjects } from '../../state/project.actions';

@Component({
  selector: 'app-group-of-tasks-details',
  templateUrl: './group-of-tasks-details.component.html',
  styleUrl: './group-of-tasks-details.component.scss'
})
export class GroupOfTasksDetailsComponent {
  groupOfTasks!: GroupOfTasks;
  projectName: string;
  groupOfTasksName: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  private ngUnsubscribe = new Subject<void>();


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('project');
      this.groupOfTasksName = params.get('groupOfTasks');
      this.projectName = this.projectName.split("-").join(" ");
      this.groupOfTasksName = this.groupOfTasksName.split("-").join(" ");
      this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' }, { label: this.projectName, routerLink: '/project-management-portal/my-projects/' + params.get('project') },{ label: this.groupOfTasksName, routerLink: '/project-management-portal/my-projects/' + params.get('project') + "/group" + params.get('groupOfTasks') }];
      this.store.select(getGroupOfTasks(this.projectName, this.groupOfTasksName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (groupOfTasks) => {
          this.groupOfTasks = groupOfTasks;
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
