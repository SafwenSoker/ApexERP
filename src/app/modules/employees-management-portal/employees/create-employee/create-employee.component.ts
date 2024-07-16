import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/user-management-portal/employee.model';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.scss'
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {
  

  @Input() visible: boolean;
  @Output() visibleChange = new EventEmitter<boolean>();
  employee: Employee = { roles: [] };
  roles: Role[];
  employees!: Employee[];
  employeeForm!: FormGroup;

  constructor(private employeesService: EmployeesService, private messageService: MessageService,private fb: FormBuilder,
    private rolesService: RolesService
  ){
    this.employeeForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      active: [true, Validators.required],
      email: [''],
      firstName: [''],
      lastName: ['']
    });
  }

  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  increment(): void {
    // this.visible = !visible;
    this.visibleChange.emit(this.visible);
  }

  showAddEmployee() {
    this.visible = true;
    this.rolesService.getRoles().subscribe(roles => {
      this.roles = roles.map(role => {
        if (role.name.endsWith("esprit")) {
          // Remove the suffix from the name and return the updated role object
          return {
            ...role,
            name: role.name.slice(0, -"esprit".length)
          };
        }
        // Return the role object as is if the name does not have the suffix
        return role;
      });
    });

  }

  onAddEmployee() {
    let employee: Employee = {};
    employee.userName = this.employeeForm.value.userName;
    employee.password = this.employeeForm.value.password;
    employee.firstName = this.employeeForm.value.firstName;
    employee.lastName = this.employeeForm.value.lastName;
    employee.email = this.employeeForm.value.email;
    employee.active = this.employeeForm.value.active;
    employee.roles = this.employee.roles;
    this.employee.roles = [];
    this.employee.password = this.employeeForm.value.password;

    // check if user already exists
    this.employeesService.getEmployees().subscribe(employees => {
      let userExists = employees.find(u => u.userName === employee.userName);
      if (!userExists) {
        console.log("User Does Not Exists");
        this.employeesService.addEmployee(employee).subscribe(e => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is added' });
          this.employees.push(e);
          this.visible = false;
          this.employeesService.getEmployees().subscribe(employes => {
            for (let employee of employees) {
              //  Get each user and each user's groups and each user's role-mappings
              this.employeesService.getEmployeeRoleMappings(employee.id).subscribe(roles => { employee.roles = roles });
            }
            this.employees = employees;
            employee.id = this.employees.find(u => u.userName === employee.userName)?.id;
            console.log(employee.id)
            if (employee.roles.length > 0) {
                this.employeesService.addEmployeeRoleMappings(employee.id, employee.roles).subscribe(e => console.log(e));
                employee.roles = []
            }
            console.log("User created with id: ", employee.id)
          }
          , err => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later!' });
          });
          console.log(employee.id)
          
        },
          err => {
            console.log(err);
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later!' });
          });
        // Get Userid and add user to groups and roles

      } else {
        console.log("User Exists");
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User already exists!' });
      }
    });
  }
}
