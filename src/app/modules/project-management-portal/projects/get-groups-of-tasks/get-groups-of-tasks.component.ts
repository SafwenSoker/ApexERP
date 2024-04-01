import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks, getGroupsOfTasks, getProjectByName } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { loadGroupsOfTasks } from '../../state/project.actions';

@Component({
  selector: 'app-get-groups-of-tasks',
  templateUrl: './get-groups-of-tasks.component.html',
  styleUrl: './get-groups-of-tasks.component.scss'
})
export class GetGroupsOfTasksComponent implements OnInit, OnDestroy {
  groupsOfTasks!: GroupOfTasks[];
  groupsOfTasksItemsMenu: MenuItem[] = [];
  projectId: number;
  projectName: string;
  activeGroupOfTasksId: number;
  activeItem: MenuItem | undefined;
  private ngUnsubscribe = new Subject<void>();
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }
  ngOnInit() {
    this.projectName = this.route.snapshot.params['project'];
    this.projectName = this.projectName.replace(/-/g, ' ');
    this.store.select(getProjectByName(this.projectName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (project) => {
        this.projectId = project.getId();
        this.store.dispatch(loadGroupsOfTasks({projectId:this.projectId}));
        this.store.select(getGroupsOfTasks(this.projectId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          (groupsOfTasks) => {
            this.groupsOfTasks = groupsOfTasks;
            this.groupsOfTasks.forEach((groupOfTasks) => {
              this.groupsOfTasksItemsMenu.push({ label: groupOfTasks.getName() })
            })
            this.activeItem = this.groupsOfTasksItemsMenu[0];
            this.activeGroupOfTasksId = this.groupsOfTasks[0].getId();
          });
      });
    console.log(this.projectId);
    
  }

  onActiveGroupOfTasksItemChange(event: MenuItem) {
    this.activeGroupOfTasksId = this.groupsOfTasks.find(groupOfTasks => groupOfTasks.getName() === event.label)?.getId() as number;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
