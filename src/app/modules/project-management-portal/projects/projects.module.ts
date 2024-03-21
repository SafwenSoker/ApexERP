import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { GetProjectComponent } from './get-project/get-project.component';
import { GetProjectsComponent } from './get-projects/get-projects.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { GetTasksComponent } from './get-tasks/get-tasks.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { CreateGroupOfTasksComponent } from './create-group-of-tasks/create-group-of-tasks.component';
import { GetGroupOfTasksComponent } from './get-group-of-tasks/get-group-of-tasks.component';
import { GetGroupsOfTasksComponent } from './get-groups-of-tasks/get-groups-of-tasks.component';
import { UpdateGroupOfTasksComponent } from '../update-group-of-tasks/update-group-of-tasks.component';

import { ProjectsRoutingModule } from './projects-routing.module';

import { BreadcrumbModule } from 'primeng/breadcrumb';


@NgModule({
  declarations: [
    CreateProjectComponent,
    CreateTaskComponent,
    GetProjectComponent,
    GetProjectsComponent,
    GetTaskComponent,
    GetTasksComponent,
    UpdateProjectComponent,
    UpdateTaskComponent,
    CreateGroupOfTasksComponent,
    GetGroupOfTasksComponent,
    GetGroupsOfTasksComponent,
    UpdateGroupOfTasksComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BreadcrumbModule
  ]
})
export class ProjectsModule { }
