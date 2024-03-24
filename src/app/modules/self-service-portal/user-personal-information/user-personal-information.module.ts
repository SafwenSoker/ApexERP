import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewPersonalInformationComponent } from './view-personal-information/view-personal-information.component';
import { UserPersonalInformationRoutingModule } from './user-personal-information-routing.module';


@NgModule({
  declarations: [
    ViewPersonalInformationComponent
  ],
  imports: [
    CommonModule,
    UserPersonalInformationRoutingModule
  ]
})
export class UserPersonalInformationModule { }
