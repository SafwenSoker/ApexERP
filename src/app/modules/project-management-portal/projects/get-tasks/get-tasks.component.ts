import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks, getTasks } from '../../state/project.selector';
import { Status } from 'src/app/models/project-management-portal/status.model';
import { loadTasks, updateTask } from '../../state/project.actions';

@Component({
  selector: 'app-get-tasks',
  templateUrl: './get-tasks.component.html',
  styleUrl: './get-tasks.component.scss'
})
export class GetTasksComponent implements OnInit, OnDestroy, OnChanges {
  tasks!: Task[];
  @Input() groupOfTasksId: number;


  private ngUnsubscribe = new Subject<void>();

  toReviewTasks: Task[] | undefined;
  inProgressTasks: Task[] | undefined;
  onHoldTasks: Task[] | undefined;
  finishedTasks: Task[] | undefined;
  taskStatus = Status;
  selectedTasks: Task[] | undefined;
  selectedTaskId: number;
  draggedTask: Task | undefined | null;
  showTaskDetailsDialog: boolean = false;
  showAddTaskDialog: boolean = false;
  constructor(private store: Store<AppState>) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['groupOfTasksId'] && changes['groupOfTasksId'].currentValue) {
      
      this.store.select(getTasks(this.groupOfTasksId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (tasks) => {
          this.tasks = tasks;
          this.inProgressTasks = this.tasks.filter(task => task.getStatus() === Status.IN_PROGRESS);
          this.finishedTasks = this.tasks.filter(task => task.getStatus() === Status.FINISHED);
          this.onHoldTasks = this.tasks.filter(task => task.getStatus() === Status.ON_HOLD);
          this.toReviewTasks = this.tasks.filter(task => task.getStatus() === Status.TO_REVIEW);
        }
      );
    }
  }
  ngOnInit() {
    this.store.dispatch(loadTasks({ groupOfTasksId: this.groupOfTasksId }));
    this.store.select(getTasks(this.groupOfTasksId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (tasks) => {
        this.tasks = tasks;
        this.inProgressTasks = this.tasks.filter(task => task.getStatus() === Status.IN_PROGRESS);
        this.finishedTasks = this.tasks.filter(task => task.getStatus() === Status.FINISHED);
        this.toReviewTasks = this.tasks.filter(task => task.getStatus() === Status.TO_REVIEW);
        this.onHoldTasks = this.tasks.filter(task => task.getStatus() === Status.ON_HOLD);
      }
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  dragStart(task: Task) {
    this.draggedTask = task;
  }

  drop(newStatus: Status) {
    console.log("Dropped To Task status: ", newStatus)
    if (this.draggedTask) {
      switch (this.draggedTask.getStatus()) {
        case Status.IN_PROGRESS: this.inProgressTasks = this.inProgressTasks?.filter(task => task.getId() !== this.draggedTask?.getId()); break;
        case Status.FINISHED: this.finishedTasks = this.finishedTasks?.filter(task => task.getId() !== this.draggedTask?.getId()); break;
        case Status.TO_REVIEW: this.toReviewTasks = this.toReviewTasks?.filter(task => task.getId() !== this.draggedTask?.getId()); break;
        case Status.ON_HOLD: this.onHoldTasks = this.onHoldTasks?.filter(task => task.getId() !== this.draggedTask?.getId()); break;
      }
      let task: Task = new Task(this.draggedTask.getId(), this.draggedTask.getName(), this.draggedTask.getDeadline(), this.draggedTask.getEmployeeId(), this.draggedTask.getStartDate(), this.draggedTask.getEndDate(), this.draggedTask.getDescription(), this.draggedTask.getStatus(), this.draggedTask.getTags(), this.draggedTask.getUrgency(), this.draggedTask.getProjectId(), this.draggedTask.getGroupOfTasksId());
      console.log(task)
      task.setStatus(newStatus)
      this.store.dispatch(updateTask({ updatedTask: task }))
    }
  }

  dragEnd() {
    this.draggedTask = null;
  }

  findIndex(task: Task) {
    let index = -1;
    // for (let i = 0; i < (this.availableTasks as Task[]).length; i++) {
    //   if (task.getId() === (this.availableProducts as Task[])[i].getId()) {
    //     index = i;
    //     break;
    //   }
    // }
    return index;
  }

  openTaskDetailsDialog(taskId: number) {
    this.selectedTaskId = taskId;
    this.showTaskDetailsDialog = true;
  }

  closeTaskDetailsDialog(){
   this.showTaskDetailsDialog = false; 
  }
  addTask(taskStatus: Status){
    this.showAddTaskDialog = true;
  }


}