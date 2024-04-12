import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class GroupOfTasksDetailsComponent implements OnChanges{
  groupOfTasks!: GroupOfTasks;
  @Input() projectName: string;
  @Input() groupOfTasksId: number;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  private ngUnsubscribe = new Subject<void>();


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes && changes['groupOfTasksId'] && changes['groupOfTasksId'].currentValue){
      this.store.select(getGroupOfTasks(this.groupOfTasksId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (groupOfTasks) => {
          console.log("selected group of tasks:", groupOfTasks)
          this.groupOfTasks = groupOfTasks;
        });
    }
  }

  ngOnInit(): void {
    this.store.select(getGroupOfTasks(this.groupOfTasksId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (groupOfTasks) => {
        console.log("selected group of tasks:", groupOfTasks)
        this.groupOfTasks = groupOfTasks;
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
