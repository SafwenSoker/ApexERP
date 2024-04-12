import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { ManagerEvaluationRoutingModule } from './manager-evaluation-routing.module';
import { TableModule } from 'primeng/table';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { GetAssessmentDetailsComponent } from './get-assessment-details/get-assessment-details.component';


@NgModule({
  declarations: [GetAssessmentsComponent, GetAssessmentDetailsComponent],
  imports: [
    CommonModule,
    ManagerEvaluationRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,


  ]
})
export class ManagerEvaluationModule { }
