import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';
import { AssessmentRoutingModule } from './assessment-routing.module';
import { AssessmentFormComponent } from './assessment-form/assessment-form.component';
import { AssessmentSubmittedComponent } from './assessment-submitted/assessment-submitted.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
    declarations: [
        SelfAssessmentComponent,
        AssessmentFormComponent,
        AssessmentSubmittedComponent,
        
    ],
    imports: [
        CommonModule,
        AssessmentRoutingModule,
        CardModule,
        TabMenuModule,
        ButtonModule,
        RadioButtonModule,
        FormsModule,
    ],
})
export class AssessmentModule {}
