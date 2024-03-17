import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateSprintComponent } from './create-sprint/create-sprint.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { GetSprintComponent } from './get-sprint/get-sprint.component';
import { GetSprintsComponent } from './get-sprints/get-sprints.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateSprintComponent } from './update-sprint/update-sprint.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

import { ProjectsRoutingModule } from './projects-routing.module';

import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    CreateProjectComponent,
    CreateSprintComponent,
    CreateTaskComponent,
    GetProjectComponent,
    GetProjectsComponent,
    GetSprintComponent,
    GetSprintsComponent,
    GetTaskComponent,
    GetTasksComponent,
    UpdateProjectComponent,
    UpdateSprintComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BreadcrumbModule
  ]
})
export class ProjectsModule { }
