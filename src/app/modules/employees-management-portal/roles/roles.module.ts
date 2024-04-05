import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoleComponent } from './create-role/create-role.component';
import { GetRoleComponent } from './get-role/get-role.component';
import { GetRolesComponent } from './get-roles/get-roles.component';
import { UpdateRoleComponent } from './update-role/update-role.component';

import { RolesRoutingModule } from './roles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { PickListModule } from 'primeng/picklist';
import { TabViewModule } from 'primeng/tabview';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    CreateRoleComponent,
    GetRoleComponent,
    GetRolesComponent,
    UpdateRoleComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    ButtonModule,
    ToastModule,
    PickListModule,
    TabViewModule,
    PasswordModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule
  ]
})
export class RolesModule { }
