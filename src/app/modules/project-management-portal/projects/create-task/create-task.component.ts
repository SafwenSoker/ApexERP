import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Status } from 'src/app/models/project-management-portal/status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';
import { AppState } from 'src/app/store/app.state';
import { getProjectByName } from '../../state/project.selector';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from 'src/app/models/user-management-portal/employee.model';
import { TasksService } from 'src/app/services/project-management-portal/tasks.service';
import { DomSanitizer } from '@angular/platform-browser';

interface UserDto {
  name: string,
  userId: string
}
interface IEmployee{
  nom: string,
  prenom: string,
  poste: string
}

interface Tag {
  name: string;
  code: TaskTag;
}

interface Urgency {
  type: string;
  code: TaskUrgency;
}

interface IStatus {
  progress: string;
  code: Status;
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent implements OnInit, OnDestroy{

  @Input() groupOfTasksId: number;
  @Input() taskStatus: Status;

  tags!: Tag[];
  selectedTags!: Tag[];
  rangeDates: Date[];
  visible: boolean = false;
  description: string = "";
  taskName: string = "";
  urgencies: Urgency[];
  selectedUrgency: Urgency;
  statuses: IStatus[];
  selectedStatus: IStatus;
  selectedEmployee: UserHRInfo;
  projectName: string;
  private ngUnsubscribe = new Subject<void>();
  employees: Employee[] = []
  employeesMultiSelect: UserDto[] = []
  selectedEmployees: UserDto[]= [];
  bestCandidate: IEmployee;
  constructor(private employeesService: EmployeesService,private route: ActivatedRoute, private store: Store<AppState>,private tasksService: TasksService, private sanitizer: DomSanitizer ) { }


  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.projectName = this.route.snapshot.params['project'];
    this.projectName = this.projectName.replace(/-/g, ' ');
    this.store.select(getProjectByName(this.projectName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (project) => {
        this.employees = project.developers
        console.log(this.employees)
        this.employees.forEach((employee) => {
          this.employeesMultiSelect.push({name: employee?.userDto.firstName + " " + employee?.userDto.lastName, userId: employee.id})
        })        
        console.log(this.employeesMultiSelect)
      });
    this.tags = [
      { name: 'Bug', code: TaskTag.BUG },
      { name: 'Feature', code: TaskTag.FEATURE },
      { name: 'Improvement', code: TaskTag.IMPROVEMENT },
      { name: 'Documentation', code: TaskTag.DOCUMENTATION },
      { name: 'Refactoring', code: TaskTag.REFACTORING }
    ];
    this.urgencies = [
      { type: "Low", code: TaskUrgency.LOW},
      { type: "Medium", code: TaskUrgency.MEDIUM },
      { type: "High", code: TaskUrgency.HIGH }
    ]
    this.statuses = [
      { progress: "In Progress", code: Status.IN_PROGRESS},
      { progress: "On Hold", code: Status.ON_HOLD},
      { progress: "To Review", code: Status.TO_REVIEW},
      { progress: "Finished", code: Status.FINISHED}
    ]
  }



  showDialog() {
    this.visible = true;
  }
  addTask() {

    console.log(this.taskName, this.rangeDates[0], this.rangeDates[1], this.description,this.selectedStatus.code, this.selectedTags.map((status)=> {return status.code}), this.selectedUrgency.code)
    let task: Task = new Task(0, this.taskName, this.rangeDates[1], 1, this.rangeDates[0], this.rangeDates[1], this.description, this.selectedStatus.code, this.selectedTags.map((status)=> {return status.code}), this.selectedUrgency.code, 1, 1)

  }

  search(){
    let description = this.sanitizer.bypassSecurityTrustHtml(this.description);
    this.tasksService.searchForBestCandidate(this.description).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (bestCandidate) => {
        this.bestCandidate = bestCandidate
        
      });
  }

}
