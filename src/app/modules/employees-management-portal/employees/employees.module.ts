import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { EmployeesRoutingModule } from './employees-routing.module';



import { DividerModule } from 'primeng/divider';
import { CardModule } from 'primeng/card';
import { PickListModule } from 'primeng/picklist';
import { TableModule} from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputText, InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {  PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';
import { TabPanel, TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateEmployeeComponent,
    GetEmployeeComponent,
    GetEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
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
  ],
  providers: [MessageService, ConfirmationService]
})
export class EmployeesModule { }
