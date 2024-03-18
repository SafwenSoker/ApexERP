import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGroupComponent } from './create-group/create-group.component';
import { GetGroupComponent } from './get-group/get-group.component';
import { GetGroupsComponent } from './get-groups/get-groups.component';
import { UpdateGroupComponent } from './update-group/update-group.component';

import { GroupsRoutingModule } from './groups-routing.module';


@NgModule({
  declarations: [
    CreateGroupComponent,
    GetGroupComponent,
    GetGroupsComponent,
    UpdateGroupComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
