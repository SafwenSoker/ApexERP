import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [SelfAssessmentComponent],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    CardModule,
    TabMenuModule,
    RadioButtonModule
  ]
})
export class AssessmentModule { }
