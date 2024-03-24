import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks } from '../../state/project.selector';

@Component({
  selector: 'app-get-tasks',
  templateUrl: './get-tasks.component.html',
  styleUrl: './get-tasks.component.scss'
})
export class GetTasksComponent implements OnInit, OnDestroy{
  tasks!: Task[];
  @Input() projectName: string;
  @Input() groupOfTasksName: string;
  private ngUnsubscribe = new Subject<void>();
  constructor(private store: Store<AppState>){}
  ngOnInit() {
    this.store.select(getGroupOfTasks(this.projectName,this.groupOfTasksName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (groupOfTasks) => {
          this.tasks = groupOfTasks.getTasks();
        }
      );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}