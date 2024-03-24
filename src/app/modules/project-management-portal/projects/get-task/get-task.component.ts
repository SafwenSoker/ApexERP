import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/project-management-portal/task.model';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrl: './get-task.component.scss'
})
export class GetTaskComponent {

  @Input() task: Task;
  delivered: boolean = true;

  constructor(private router: Router) { }
  redirectToGroupOfTasksDetails() {
    this.router.navigate([this.router.url, "task", this.getTaskRoute()])
  }

  getTaskRoute() {

    return this.task.getName().split(" ").join("-");
  }
}