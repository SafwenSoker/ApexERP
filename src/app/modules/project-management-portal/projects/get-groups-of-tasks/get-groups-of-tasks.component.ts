import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks, getGroupsOfTasks, getProjectByName, getProjects } from '../../state/project.selector';
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
  statuses: any[];
  selectedStatus: string;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }
  ngOnInit() {
    console.log("here")
    this.statuses = [
      { label: 'Completed', value: 'completed', icon: "pi pi-fw pi-check", severity: "info" },
      { label: 'In Progress', value: 'in_progress', icon: "pi pi-fw pi-hourglass", severity: "info" }
    ];
    this.projectName = this.route.snapshot.params['project'];
    this.projectName = this.projectName.replace(/-/g, ' ');
    this.store.select(getProjectByName(this.projectName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (project) => {
        this.projectId = project.id;
        this.store.dispatch(loadGroupsOfTasks({projectId:this.projectId}));
        this.store.select(getGroupsOfTasks(this.projectId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
          (groupsOfTasks) => {
            this.groupsOfTasks = groupsOfTasks;
            console.log(this.groupsOfTasks)
            this.groupsOfTasks.forEach((groupOfTasks) => {
              this.groupsOfTasksItemsMenu.push({ label: groupOfTasks.name })
            })
            console.log(this.groupsOfTasksItemsMenu)
            this.activeItem = this.groupsOfTasksItemsMenu[0];
            this.activeGroupOfTasksId = this.groupsOfTasks[0]?.id;
          });
      });
    
  }

  onActiveGroupOfTasksItemChange(event: MenuItem) {
    this.activeGroupOfTasksId = this.groupsOfTasks.find(groupOfTasks => groupOfTasks.getName() === event.label)?.id as number;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }



}
