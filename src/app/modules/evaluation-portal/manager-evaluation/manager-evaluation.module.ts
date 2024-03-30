import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerEvaluationRoutingModule } from './manager-evaluation-routing.module';
import { TableModule } from 'primeng/table';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';


@NgModule({
  declarations: [GetAssessmentsComponent],
  imports: [
    CommonModule,
    ManagerEvaluationRoutingModule,
    TableModule
  ]
})
export class ManagerEvaluationModule { }
