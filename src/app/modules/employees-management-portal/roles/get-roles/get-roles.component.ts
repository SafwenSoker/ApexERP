import { Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';
import { UpdateRoleService } from '../update-role/update-role.service';
import { Table } from 'primeng/table';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-get-roles',
  templateUrl: './get-roles.component.html',
  styleUrl: './get-roles.component.scss'
})
export class GetRolesComponent implements OnInit, OnDestroy {


  roleDialog: boolean = false;
  submitted: boolean = false;
  role?: Role;
  roleToBeCreated: Role = { composite: false, composites: [] };
  items!: MenuItem[];
  checked: boolean = false;
  roles!: Role[];
  availableRoles!: Role[];

  visible: boolean = false;
  clonedRoles: { [s: string]: Role } = {};
  loading: boolean = true;
  activityValues: number[] = [0, 100];
  private ngUnsubscribe = new Subject<void>();

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
    this.clonedRoles[role.id as string] = { ...role };
  }

  onRowEditSave(role: Role) {
    if (role.name != "") {
      delete this.clonedRoles[role.id as string];
      this.rolesService.updateRole(role).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (role) => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role is updated' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Invalid Role Name' });
    }
  }

  onRowEditCancel(role: Role, index: number) {
    this.roles[index] = this.clonedRoles[role.id as string];
    delete this.clonedRoles[role.id as string];
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
      console.log(this.availableRoles)
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
        this.rolesService.deleteRole(role.name).subscribe(e => console.log(e));
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


  hideDialog() {
    this.roleDialog = false;
    this.submitted = false;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
