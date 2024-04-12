import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { GroupOfTasksDetailsComponent } from './group-of-tasks-details/group-of-tasks-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  {
    path: "", component: GetProjectsComponent
  },
  {
    path: ":project",component: ProjectDetailsComponent
  },
  {
    path:":project/group/:groupOfTasks", component: GroupOfTasksDetailsComponent
  },
  {
    path: ":project/group/:groupOfTasks/task/:task", component: TaskDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
