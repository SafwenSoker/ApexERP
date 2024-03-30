import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAssessmentsComponent } from './get-assessments/get-assessments.component';

const routes: Routes = [{
  path: "", component: GetAssessmentsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerEvaluationRoutingModule { }
