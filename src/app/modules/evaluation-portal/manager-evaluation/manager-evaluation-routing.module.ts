import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';
import { GetAssessmentDetailsComponent } from './get-assessment-details/get-assessment-details.component';

const routes: Routes = [
    {
        path: '',
        component: GetAssessmentsComponent,
    },
    {
        path: ':id',
        component: GetAssessmentDetailsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagerEvaluationRoutingModule {}
