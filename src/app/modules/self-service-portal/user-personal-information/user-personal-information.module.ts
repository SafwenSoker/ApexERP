import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPersonalInformationComponent } from './view-personal-information/view-personal-information.component';
import { UserPersonalInformationRoutingModule } from './user-personal-information-routing.module';
import { ViewEmployeesInformationsComponent } from './view-employees-informations/view-employees-informations.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InplaceModule } from 'primeng/inplace';

@NgModule({
  declarations: [
    ViewPersonalInformationComponent,
    ViewEmployeesInformationsComponent
  ],
  imports: [
    CommonModule,
    UserPersonalInformationRoutingModule,
    TabMenuModule,
    TableModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    InplaceModule
  ]
})
export class UserPersonalInformationModule { }
