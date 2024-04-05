import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';
import { UpdateRoleService } from '../update-role/update-role.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-get-roles',
  templateUrl: './get-roles.component.html',
  styleUrl: './get-roles.component.scss'
})
export class GetRolesComponent implements OnInit {


  roleDialog: boolean = false;
  submitted: boolean = false;
  role?: Role;
  roleToBeCreated: Role = { composite: false, composites: [] };
  items!: MenuItem[];
  checked: boolean = false;
  roles!: Role[];
  availableRoles!: Role[];
  roleForm!: FormGroup;
  visible: boolean = false;
  clonedRoles: { [s: string]: Role } = {};
  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(
    private fb: FormBuilder,
    private rolesService: RolesService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private updateRoleService: UpdateRoleService,
    private viewContainerRef: ViewContainerRef
    ) {

  }

  onRowEditInit(role: Role) {
    this.updateRoleService.setRootViewContainerRef(this.viewContainerRef);
    this.updateRoleService.addDynamicComponent(role);
  }



  ngOnInit() {
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
    this.rolesService.getRoles().subscribe(roles => {
      this.availableRoles = roles;
      for (let role of roles) {
        this.rolesService.getRoleUsers(role.name).subscribe(users => {
          role.users = users;
        });
      }
      this.roles = roles;
    }, err => {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later!' });
    });
  }

  deleteRole(role: Role) {
    console.log("hh");
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + role.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(role)
        this.roles = this.roles.filter((val) => val.id !== role.id);
        this.rolesService.deleteRole(role.id).subscribe(e => console.log(e));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Role Deleted', life: 3000 });
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

  showAddRole() {
    this.role = {};
    this.submitted = false;
    this.roleDialog = true;
  }
  hideDialog() {
    this.roleDialog = false;
    this.submitted = false;
  }
  onAddRole() {
    this.submitted = true;

    // check if user already exists
    this.rolesService.getRoles().subscribe(roles => {
      let roleExists = false;
      for (let role of roles) {
        if (role.name == this.roleToBeCreated.name) {
          roleExists = true;
        }
        break;
      }
      if (!roleExists) {
        this.rolesService.
          addRole(this.roleToBeCreated).subscribe(r => {
            if (this.roleToBeCreated.composite) {
              this.rolesService.addCompositesToRole(this.roleToBeCreated).subscribe(e => {
                this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Composite Role is added successfully' });
              },
                err => {
                  this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.error });
                });
            }else {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role is added successfully' });
            }

            this.roles.push(r);
            this.visible = false;
          },
            err => {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'An error has occured, try again later!' });
            });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Role already exists!' });
      }
    });
  }


}
