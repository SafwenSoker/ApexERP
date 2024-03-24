import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonalInformationComponent } from './view-personal-information/view-personal-information.component';

const routes: Routes = [
  {
    path: "", component: ViewPersonalInformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPersonalInformationRoutingModule { }
