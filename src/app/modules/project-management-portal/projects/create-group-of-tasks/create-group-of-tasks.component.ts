import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createGroupOfTasks } from '../../state/project.actions';
import { Employee } from 'src/app/models/user-management-portal/employee.model';
import { Subject, takeUntil } from 'rxjs';
import { getProjectById } from '../../state/project.selector';

interface UserDto {
  name: string,
  userId: string
}
@Component({
  selector: 'app-create-group-of-tasks',
  templateUrl: './create-group-of-tasks.component.html',
  styleUrl: './create-group-of-tasks.component.scss'
})
export class CreateGroupOfTasksComponent{

  @Input()projectId: string;
  groupOfTasksFormGroup: FormGroup;
  visible: boolean = false;
  demoDate: Date;
  startDate: Date;
  estimatedEndDate: Date;
  deliveredDate: Date;
  employees: Employee[] = []
  employeesMultiSelect: UserDto[] = []
  selectedEmployees: UserDto[]= [];
  private ngUnsubscribe = new Subject<void>();


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getProjectById(+this.projectId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (project) => {
        console.log(project)
        this.employees = project.developers
        console.log(this.employees)
        console.log(this.employees)
        this.employees.forEach((employee) => {
          this.employeesMultiSelect.push({name: employee?.userDto.firstName + " " + employee?.userDto.lastName, userId: employee.id})
        })

      }
    );
    this.groupOfTasksFormGroup = new FormGroup({
      name: new FormControl(),
      description: new FormControl()
    });
  }
  save() {
    var formData: any= new FormData();
    formData.set('name', this.groupOfTasksFormGroup.value.name);
    formData.set('startDate', this.startDate);   
    formData.set('estimatedEndDate', this.estimatedEndDate);   
    formData.set('demoDate', this.demoDate);   
    formData.set('deliveredDate', this.deliveredDate);   
    formData.set('project', this.projectId)
    formData.set('developers', this.selectedEmployees);
    this.store.dispatch(createGroupOfTasks({name: this.groupOfTasksFormGroup.value.name, startDate: this.startDate, estimatedEndDate: this.estimatedEndDate, demoDate: this.demoDate, deliveredDate: this.deliveredDate, project: +this.projectId, developers: this.selectedEmployees}))
    this.visible = false;
  }
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }
  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
