import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';
import { AppState } from 'src/app/store/app.state';
import { getGroupOfTasks, getGroupsOfTasks, getTasks } from '../../state/project.selector';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { group } from '@angular/animations';
import { Subject, takeUntil } from 'rxjs';
import { TimesheetService } from 'src/app/services/workstation-portal/timesheet.service';
import { loadGroupsOfTasks, loadTasks } from '../../state/project.actions';
import { GroupsOfTasksService } from 'src/app/services/project-management-portal/groups-of-tasks.service';
import { TasksService } from 'src/app/services/project-management-portal/tasks.service';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrl: './get-project.component.scss'
})
export class GetProjectComponent implements OnInit,OnChanges, OnDestroy{

  @Input() project: Project;
  @Input() selectedStatus: any;
  @Input() hide: boolean = false;
  status: string="";
  numberOfTasks = 0;
  groupsOfTasks: GroupOfTasks[] =[]
  private ngUnsubscribe = new Subject<void>();

  constructor(private router: Router, private store: Store<AppState>, private groupsOfTasksService: GroupsOfTasksService, private tasksService: TasksService){
  }

  ngOnInit(): void {
    this.groupsOfTasksService.getGroupsOfTasks(this.project.getId()).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (groupsOfTasks) => {
        this.groupsOfTasks = groupsOfTasks;
        this.groupsOfTasks.forEach((groupOfTasks)=> {
          this.tasksService.getTasks(groupOfTasks.getId()).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
            (tasks) => {
              this.numberOfTasks += tasks.length;
              console.log("Number of tasks increased : ", this.numberOfTasks)
            }
          );
        })
      }
    );
    // this.store.dispatch(loadGroupsOfTasks({projectId: this.project.getId()}));
    // this.store.select(getGroupsOfTasks(this.project.getId())).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
    //   (groupsOfTasks) => {
    //     groupsOfTasks.forEach((groupOfTasks)=> {
    //       console.log(groupOfTasks)
    //       this.store.dispatch(loadTasks({groupOfTasksId: groupOfTasks.getId()}));
    //       // this.store.select(getTasks(groupOfTasks.getId())).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
    //       //   (tasks) => {
    //       //     console.log(tasks)
    //       //     // this.numberOfTasks += tasks.length;
    //       //     // console.log("Number of tasks increased : ", this.numberOfTasks)
    //       //   }
    //       // );
    //     })
    //   }
    // );
    // this.store.select(getGroupOfTasks()).
    // this.store.select(getTasks()).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
    //   (projects) => {
    //     this.projects = projects;
    //   }
    // );
  }



  redirectToProjectDetails(){
    this.router.navigate(["/project-management-portal/my-projects",this.getProjectRoute()])
  }

  getProjectRoute(){
    console.log(this.project.getName().split(" ").join("-"));
    return this.project.getName().split(" ").join("-");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // If changes have selectedStatus then check if this.project have the same status
    // if not then hide this project
    if(changes["selectedStatus"] && this.project){
      console.log(changes, this.project)
      if(this.project.getStatus() !== this.selectedStatus){
        this.hide = true
      }else{
        this.hide = false;
      }
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
