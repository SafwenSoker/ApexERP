import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRolesComponent } from './get-roles/get-roles.component';

const routes: Routes = [
  {
    path: "", component: GetRolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
