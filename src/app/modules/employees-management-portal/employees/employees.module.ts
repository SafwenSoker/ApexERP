import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { EmployeesRoutingModule } from './employees-routing.module';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    GetEmployeeComponent,
    GetEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
