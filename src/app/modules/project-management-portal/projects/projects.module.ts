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
import { UpdateGroupOfTasksComponent } from './update-group-of-tasks/update-group-of-tasks.component';

import { ProjectsRoutingModule } from './projects-routing.module';

import { BreadcrumbModule } from 'primeng/breadcrumb';
import { ButtonModule } from 'primeng/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsEffects } from '../state/project.effects';
import { PROJECT_STATE_NAME } from '../state/project.selector';
import { projectsReducer } from '../state/project.reducer';
import { CheckboxModule } from 'primeng/checkbox';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { GroupOfTasksDetailsComponent } from './group-of-tasks-details/group-of-tasks-details.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


import { TagModule } from 'primeng/tag';
import { TaskUrgencyIconPipe } from 'src/app/pipes/project-managemeng-portal/task-urgency-icon.pipe';
import { TaskTagIconPipe } from 'src/app/pipes/project-managemeng-portal/task-tag-icon.pipe';
import { TaskStatusIconPipe } from 'src/app/pipes/project-managemeng-portal/task-status-icon.pipe';
import { TaskUrgencySeverityPipe } from 'src/app/pipes/project-managemeng-portal/task-urgency-severity.pipe';
import { TaskTagSeverityPipe } from 'src/app/pipes/project-managemeng-portal/task-tag-severity.pipe';
import { TaskStatusSeverityPipe } from 'src/app/pipes/project-managemeng-portal/task-status-severity.pipe';
import { TaskUrgencyValuePipe } from 'src/app/pipes/project-managemeng-portal/task-urgency-value.pipe';
import { TaskTagValuePipe } from 'src/app/pipes/project-managemeng-portal/task-tag-value.pipe';
import { TaskStatusValuePipe } from 'src/app/pipes/project-managemeng-portal/task-status-value.pipe';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabMenuModule } from 'primeng/tabmenu';
import { DragDropModule } from 'primeng/dragdrop';
import { InplaceModule } from 'primeng/inplace';
import { EditorModule } from 'primeng/editor';
import { MultiSelectModule } from 'primeng/multiselect';
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
    UpdateGroupOfTasksComponent,
    ProjectDetailsComponent,
    GroupOfTasksDetailsComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    StoreModule.forFeature(PROJECT_STATE_NAME, projectsReducer),
    EffectsModule.forFeature([ProjectsEffects]),
    TagModule,
    TaskUrgencyIconPipe,
    TaskTagIconPipe,
    TaskStatusIconPipe,
    TaskUrgencySeverityPipe,
    TaskTagSeverityPipe,
    TaskStatusSeverityPipe,
    TaskStatusValuePipe,
    TaskUrgencyValuePipe,
    TaskTagValuePipe,
    TableModule,
    ToastModule,
    ToolbarModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    SelectButtonModule,
    InputTextareaModule,
    TabMenuModule,
    DragDropModule,
    InplaceModule,
    EditorModule,
    MultiSelectModule
  ],
  providers :[
    MessageService, ConfirmationService
  ]
})  
export class ProjectsModule { }
