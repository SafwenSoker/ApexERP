import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';

@NgModule({
  declarations: [SelfAssessmentComponent, AssessmentFormComponent],
  imports: [
    CommonModule,
    AssessmentRoutingModule,
    CardModule,
    TabMenuModule,
    RadioButtonModule
  ],
  exports: [AssessmentFormComponent]
})
export class AssessmentModule { }
