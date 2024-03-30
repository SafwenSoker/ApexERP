import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetAssessmentComponent } from './get-assessment/get-assessment.component';
import { ButtonModule } from 'primeng/button';
import { AssessmentHistoryRoutingModule } from './assessment-history-routing.module';
import { ChipsModule } from 'primeng/chips';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GetAssessmentComponent,
    GetAssessmentsComponent
  ],
  imports: [
    CommonModule,
    AssessmentHistoryRoutingModule,
    ButtonModule,
    ChipsModule,
    FormsModule
  ]
})
export class AssessmentHistoryModule { }
