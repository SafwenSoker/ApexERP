import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Employee } from 'src/app/models/user-management-portal/employee.model';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';

@Component({
  selector: 'app-get-employees',
  templateUrl: './get-employees.component.html',
  styleUrl: './get-employees.component.scss'
})
export class GetEmployeesComponent {

  items!: MenuItem[];
  dials!: MenuItem[];
  createEmployeeDialog: Employee;
  list1: string[] = ["a", "b", "c"];
  list2: string[] = [];
  position: string = 'top';
  selectedRole!: Role;
  
  
  positionOptions = [
    {
      label: 'Left',
      value: 'left'
    }
  ];
  employee: Employee = { roles: [] };
  employees!: Employee[];
  employeeForm!: FormGroup;
  employeeToUpdate!: Employee;

  visible: boolean = false;
  roles!: Role[];
  rolesFilter = [
    { name: 'Admin', code: 'admin' },
    { name: 'User', code: 'user' }
  ]
  clonedEmployees: { [s: string]: Employee } = {}

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(
    private fb: FormBuilder,
    private employeesService: EmployeesService,
    private rolesService: RolesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    // private updateUserService: UpdateUserService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.employeeForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      enabled: [true, Validators.required],
      email: [''],
      firstName: [''],
      lastName: ['']
    });
  }

  // onRowEditInit(user: Employee) {
  //   this.updateUserService.setRootViewContainerRef(this.viewContainerRef);
  //   this.updateUserService.addDynamicComponent(user);
  // }

  ngOnInit() {
    this.dials = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        icon: 'pi pi-eye',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];
    this.items = [
      {
        label: 'departments',
        icon: '/assets/images/departments.png'
      },
      {
        label: 'roles',
        icon: '/assets/images/roles.png'
      },
      {
        label: 'users',
        icon: '/assets/images/users.png'
      }
    ];
    this.employeesService.getEmployees().subscribe(employees => {
      for (let employee of employees) {
        //  Get each user and each user's groups and each user's role-mappings
        this.employeesService.getEmployeeRoleMappings(employee.id).subscribe(roles => { employee.roles = roles });
      }
      this.employees = employees;
      console.log(this.employees)
    }
      , err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later!' });
      });
  }

  deleteEmployee(employee: Employee) {
    console.log("hh");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + employee.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(employee)
        this.employees = this.employees.filter((val) => val.id !== employee.id);
        this.employeesService.deleteEmployee(employee.id).subscribe(e => console.log(e));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000 });
      }
    });
  }
  clear(table: Table) {
    table.clear();
  }

  getSeverity(role: string) {
    switch (role) {
      case 'admin':
        return 'info';

      case 'user':
        return 'success';

    }
    return "danger";
  }
  showAddEmployee() {
    this.visible = true;
    this.rolesService.getRoles().subscribe(roles => {
      this.roles = roles;
    });

  }
  onAddEmployee() {
    let employee: Employee = {};
    employee.username = this.employeeForm.value.username;
    employee.password = this.employeeForm.value.password;
    employee.firstName = this.employeeForm.value.firstName;
    employee.lastName = this.employeeForm.value.lastName;
    employee.email = this.employeeForm.value.email;
    employee.enabled = this.employeeForm.value.enabled;
    employee.roles = this.employee.roles;
    this.employee.roles = [];
    this.employee.password = this.employeeForm.value.password;

    // check if user already exists
    this.employeesService.getEmployees().subscribe(employees => {
      let userExists = employees.find(u => u.username === employee.username);
      if (!userExists) {
        console.log("User Does Not Exists");
        this.employeesService.addEmployee(employee).subscribe(e => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User is added' });
          this.employees.push(e);
          this.visible = false;
          this.employeesService.getEmployees().subscribe(users => {
            for (let user of users) {
              //  Get each user and each user's groups and each user's role-mappings
              this.employeesService.getEmployeeRoleMappings(user.id).subscribe(roles => { user.roles = roles });
              
            }
            this.employees = employees;
            employee.id = this.employees.find(u => u.username === employee.username)?.id;
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
