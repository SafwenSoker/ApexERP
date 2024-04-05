import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPersonalInformationComponent } from './view-personal-information/view-personal-information.component';
import { ViewEmployeesInformationsComponent } from './view-employees-informations/view-employees-informations.component';
const routes: Routes = [
  {
    path: "", component: ViewPersonalInformationComponent
  },
  {
    path: "employees-info", component: ViewEmployeesInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPersonalInformationRoutingModule { }
