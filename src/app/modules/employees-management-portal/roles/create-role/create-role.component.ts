import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role } from 'src/app/models/user-management-portal/role.model';
import { RolesService } from 'src/app/services/employees-management-portal/roles.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrl: './create-role.component.scss'
})
export class CreateRoleComponent implements OnInit,OnDestroy{

  roleForm!: FormGroup;

  constructor(private fb: FormBuilder, private rolesService: RolesService) {
    this.roleForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  submitted: boolean = false;
  roleDialog: boolean = false;
  role?: Role;


  showAddRole() {
    this.role = {};
    this.submitted = false;
    this.roleDialog = true;
  }
  hideDialog() {
    this.roleDialog = false;
    this.submitted = false;
  }
  save() {
    let data = new FormData();
    data.set('name', this.roleForm.value.name);
    this.rolesService.addRole(data).subscribe((res) => {
      this.roleDialog = false;
      this.role = {};
    });
  }
}
