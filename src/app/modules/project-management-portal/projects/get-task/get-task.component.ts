import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getTask } from '../../state/project.selector';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrl: './get-task.component.scss'
})
export class GetTaskComponent implements OnInit{

  @Input() taskId: number;
  @Output() changedSelectedTaskEvent: EventEmitter<number> = new EventEmitter();
  task :Task
  openTaskDetailsDialog: boolean= false;
  selectedTaskId: number;

  constructor(private store: Store<AppState>) { }
  ngOnInit(): void {
    this.store.select(getTask(this.taskId)).subscribe(
      (task: Task) => {
        this.task = task;
      }
    );
  }
  openTaskDetails(taskId:number) {
    this.openTaskDetailsDialog = true;
    this.selectedTaskId = taskId;
    this.changedSelectedTaskEvent.emit(taskId)
  }

  getTaskRoute() {
    return this.task.getName().split(" ").join("-");
  }
}