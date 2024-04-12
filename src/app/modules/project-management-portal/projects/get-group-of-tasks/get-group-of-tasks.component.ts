import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks } from '../../state/project.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-get-group-of-tasks',
  templateUrl: './get-group-of-tasks.component.html',
  styleUrl: './get-group-of-tasks.component.scss'
})
export class GetGroupOfTasksComponent implements OnInit{

  @Input() groupOfTasksName: string;
  @Input() projectName: string;
  delivered: boolean = true;
  private ngUnsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    // this.store.select(getGroupOfTasks(this.projectName, this.groupOfTasksName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
    //   (groupOfTasks) => {
    //     this.groupOfTasks = projects;
    //   }
    // );
  }
  // redirectToGroupOfTasksDetails(){
  //   this.router.navigate([this.router.url,"group",this.getGroupOfTasksRoute()])
  // }

  // getGroupOfTasksRoute(){
    
  //   return this.groupOfTasks.getName().split(" ").join("-");
  // }
}
