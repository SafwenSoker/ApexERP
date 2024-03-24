import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks, getProject } from '../../state/project.selector';

@Component({
  selector: 'app-get-groups-of-tasks',
  templateUrl: './get-groups-of-tasks.component.html',
  styleUrl: './get-groups-of-tasks.component.scss'
})
export class GetGroupsOfTasksComponent implements OnInit, OnDestroy{
  groupsOfTasks!: GroupOfTasks[];
  @Input() projectName: string;
  private ngUnsubscribe = new Subject<void>();
  constructor(private store: Store<AppState>){}
  ngOnInit() {
      console.log("Project name: ",this.projectName)
      this.store.select(getProject(this.projectName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (project) => {
          console.log(project);
          this.groupsOfTasks = project.getGroupsOfTasks();
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }


}
