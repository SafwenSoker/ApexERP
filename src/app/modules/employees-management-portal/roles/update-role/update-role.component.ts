import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrl: './update-role.component.scss'
})
export class UpdateRoleComponent implements OnInit {

  @Input() role!: Role;
  @Output() closeUpdateRole: EventEmitter<any> = new EventEmitter<any>();

  updateRoleDialog: boolean = false;
  availableRoles: Role[] = [];
  initialComposites: Role[] = [];
  updateRoleForm!: FormGroup;

  constructor(
    private rolesService: RolesService,
    private messageService: MessageService,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    this.updateRoleDialog = true;

    this.rolesService.getRoles().subscribe(roles => {
      // Filter roles that exist in the user roles
      this.availableRoles = roles.filter(availableRole => !this.role.composites?.find((role) => availableRole.name === role.name));
      if (this.role.composites && this.role.composites.length > 0){
        this.initialComposites =  [...this.role.composites];
      }
      
    });
    this.updateRoleDialog = true;
    console.log(this.role);
    this.updateRoleForm = this.fb.group({
      name: [this.role.name, Validators.required],
      description: [this.role.description, Validators.required]
    });
  }


  onUpdateGroup() {
    this.role.name = this.updateRoleForm.get('name')?.value;
    this.role.description = this.updateRoleForm.get('description')?.value;
    console.log("initial role composites : ", this.initialComposites);
    console.log("user composites : ", this.role.composites);
    this.rolesService.updateRole(this.role).subscribe(user => {
      let compositesToAdd = this.role.composites.filter(role =>
        !this.initialComposites.some(initialComposite => initialComposite.id === role.id)
      );
      let compositesToDelete = this.initialComposites.filter(initialComposite =>
        !this.role.composites.some(role => role.id === initialComposite.id)
      );
      
      console.log("users to delete : ", compositesToDelete);
      console.log("users to add : ", compositesToAdd);
      this.rolesService.addCompositesToRole(this.role).subscribe(
        () => {
          return;
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Group not updated, could not add roles to group members', life: 3000 });
          this.updateRoleDialog = false;
        }
      );
      this.rolesService.deleteCompositesOfRole(this.role,compositesToDelete).subscribe(
        () => {
          return;
        },
        error => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Group not updated, could not revoke roles from group members', life: 3000 });
          this.updateRoleDialog = false;
        }
      );

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Role updated', life: 3000 });
      this.updateRoleDialog = false;
    },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Role not updated', life: 3000 });
        this.updateRoleDialog = false;
      });
    // Destroy the component
    this.closeUpdateRole.emit(event);
  }

}
