import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getTask } from '../../state/project.selector';
import { deleteTask } from '../../state/project.actions';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

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

  constructor(private store: Store<AppState>,private confirmationService: ConfirmationService, private messageService: MessageService ) { }
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

  closedDialogEvent(){
    this.openTaskDetailsDialog = false;
  }

  deleteTask(taskId: number){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Do you want to delete this task?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass:"p-button-danger p-button-text",
      rejectButtonStyleClass:"p-button-text p-button-text",
      acceptIcon:"none",
      rejectIcon:"none",

      accept: () => {
          this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Task deleted' });
      },
      reject: () => {
          this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
  });
    this.store.dispatch(deleteTask({taskId: taskId}));
  }
}