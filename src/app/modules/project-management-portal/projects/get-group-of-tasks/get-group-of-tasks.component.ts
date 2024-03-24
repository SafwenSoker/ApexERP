import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';

@Component({
  selector: 'app-get-group-of-tasks',
  templateUrl: './get-group-of-tasks.component.html',
  styleUrl: './get-group-of-tasks.component.scss'
})
export class GetGroupOfTasksComponent {

  @Input() groupOfTasks: GroupOfTasks;
  delivered: boolean = true;

  constructor(private router: Router){}
  redirectToGroupOfTasksDetails(){
    this.router.navigate([this.router.url,"group",this.getGroupOfTasksRoute()])
  }

  getGroupOfTasksRoute(){
    
    return this.groupOfTasks.getName().split(" ").join("-");
  }
}
