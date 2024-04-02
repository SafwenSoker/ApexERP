import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfAssessmentComponent } from './self-assessment/self-assessment.component';

const routes: Routes = [
  {
    path: "", component: SelfAssessmentComponent,
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssessmentRoutingModule { }
