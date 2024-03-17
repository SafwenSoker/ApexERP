import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProjectsComponent } from './get-projects/get-projects.component';

const routes: Routes = [
  {
    path: "", component: GetProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
