import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Employee } from 'src/app/models/user-management-portal/employee.model';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {

  @Input() employee!: Employee;
  @Output() closeUpdateEmployee: EventEmitter<any> = new EventEmitter<any>();

  updateEmployeeDialog: boolean = false;
  availableRoles: Role[] = [];
  initialRoles: Role[] = [];
  updateUserForm!: FormGroup;

  constructor(
    private employeesService: EmployeesService,
    private rolesService: RolesService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {

  }

  ngOnInit() {
    this.updateEmployeeDialog = true;

    this.rolesService.getRoles().subscribe(roles => {
      // Filter roles that exist in the user roles
      this.availableRoles = roles.filter(availableRole => !this.employee.roles?.find((role) => availableRole.name === role.name));
      if (this.employee.roles && this.employee.roles.length > 0) {
        this.initialRoles = [...this.employee.roles];
      } else {
        this.initialRoles = [];
      }

    });
    
    this.updateEmployeeDialog = true;
    console.log(this.employee);
    this.updateUserForm = this.fb.group({
      username: [this.employee.userName, Validators.required],
      enabled: [this.employee.active, Validators.required],
      email: [this.employee.email],
      firstName: [this.employee.firstName],
      lastName: [this.employee.lastName]
    });
  }




  onUpdateEmployee() {
    this.employee.userName = this.updateUserForm.get('username')?.value;
    this.employee.active = this.updateUserForm.get('enabled')?.value;
    this.employee.email = this.updateUserForm.get('email')?.value;
    this.employee.firstName = this.updateUserForm.get('firstName')?.value;
    this.employee.lastName = this.updateUserForm.get('lastName')?.value;
    console.log("user to update : ", this.employee);
    // get initial Roles, get user.roles modified
    // get initialGroups, get user.groups modified
    console.log("initial user roles : ", this.initialRoles);
    console.log("user roles : ", this.employee.roles);
    this.employeesService.updateEmployee(this.employee).subscribe(user => {
      let rolesToAdd = this.employee.roles.filter(role =>
        !this.initialRoles.some(initialRole => initialRole.id === role.id)
      );
      let rolesToDelete = this.initialRoles.filter(initialRole =>
        !this.employee.roles.some(role => role.id === initialRole.id)
      );

      console.log("users to delete : ", rolesToDelete);
      console.log("users to add : ", rolesToAdd);
      this.employeesService.addEmployeeRoleMappings(this.employee.id, rolesToAdd).subscribe(
        () => {
          return;
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not updated, could not apply roles to user', life: 3000 });
          this.updateEmployeeDialog = false;
        }
      );
      this.employeesService.deleteEmployeeRoleMappings(this.employee.id, rolesToDelete).subscribe(
        () => {
          return;
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not updated, could not revoke roles from user', life: 3000 });
          this.updateEmployeeDialog = false;
        }
      );

      

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User updated', life: 3000 });
      this.updateEmployeeDialog = false;
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'User not updated', life: 3000 });
        this.updateEmployeeDialog = false;
      });
    // Destroy the component
    this.closeUpdateEmployee.emit(event);
  }

}
