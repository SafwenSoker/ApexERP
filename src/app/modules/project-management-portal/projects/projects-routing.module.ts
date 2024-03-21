import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetGroupOfTasksComponent } from './get-group-of-tasks/get-group-of-tasks.component';
import { GetTaskComponent } from './get-task/get-task.component';

const routes: Routes = [
  {
    path: "", component: GetProjectsComponent
  },
  {
    path: ":name",component: GetProjectComponent
  },
  {
    path:":name/group/:name", component: GetGroupOfTasksComponent
  },
  {
    path: ":name/group/:name/task/:name", component: GetTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
