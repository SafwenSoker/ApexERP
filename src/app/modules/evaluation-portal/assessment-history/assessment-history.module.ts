import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAssessmentComponent } from './get-assessment/get-assessment.component';
import { ButtonModule } from 'primeng/button';
import { AssessmentHistoryRoutingModule } from './assessment-history-routing.module';
import { ChipsModule } from 'primeng/chips';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetAssessmentDetailsComponent } from './get-assessment-details/get-assessment-details.component';
import { CardModule } from 'primeng/card';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    GetAssessmentComponent,
    GetAssessmentsComponent,
    GetAssessmentDetailsComponent
  ],
  imports: [
    CommonModule,
    AssessmentHistoryRoutingModule,
    ButtonModule,
    ChipsModule,
    FormsModule,
    CardModule,
    RadioButtonModule,
    ReactiveFormsModule
  ]
})
export class AssessmentHistoryModule { }
