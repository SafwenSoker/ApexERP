import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetDaysoffComponent } from './get-daysoff/get-daysoff.component';
import { RequestDaysoffComponent } from './request-daysoff/request-daysoff.component';

import { DaysoffRoutingModule } from './daysoff-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    GetDaysoffComponent,
    RequestDaysoffComponent
  ],
  imports: [
    CommonModule,
    DaysoffRoutingModule,
    InputTextModule,
    ButtonModule,
    CalendarModule,
    ReactiveFormsModule,
    FormsModule,
    DividerModule,
    DropdownModule,
    InputTextareaModule
  ]
})
export class DaysoffModule { }
