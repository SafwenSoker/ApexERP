import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { createProject } from '../../state/project.actions';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';
import { Subject, takeUntil } from 'rxjs';
import { Employee } from 'src/app/models/user-management-portal/employee.model';



interface UserDto {
  name: string,
  userId: string
}

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {

  projectFormGroup: FormGroup;
  visible: boolean = false;
  employees: Employee[] = []
  employeesMultiSelect: UserDto[] = []
  selectedEmployees: UserDto[]= [];
  private ngUnsubscribe = new Subject<void>();

  constructor(private store: Store<AppState>, private employeesService: EmployeesService) { }

  ngOnInit() {
    this.projectFormGroup = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      color: new FormControl()
    });
    this.employeesService.getEmployees().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (employees) => {
        this.employees = employees;
        console.log(this.employees)
        this.employees.forEach((employee) => {
          this.employeesMultiSelect.push({name: employee.firstName + " " + employee.lastName, userId: employee.id})
        })

      }
    );
  }
  save() {
    var formData: any= new FormData();
    formData.set('title', this.projectFormGroup.value.title);
    formData.set('description', this.projectFormGroup.value.description);   
    formData.set('color', this.projectFormGroup.value.color);
    formData.set('developers', this.selectedEmployees);
    console.log(this.selectedEmployees)
    this.store.dispatch(createProject({title: this.projectFormGroup.value.title, description: this.projectFormGroup.value.description,color: this.projectFormGroup.value.color, developers: this.selectedEmployees}))
    this.visible = false;
  }
  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

}
