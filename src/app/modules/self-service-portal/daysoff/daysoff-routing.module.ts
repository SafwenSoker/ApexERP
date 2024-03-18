import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDaysoffComponent } from './get-daysoff/get-daysoff.component';

const routes: Routes = [
  {
    path: "",  component: GetDaysoffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaysoffRoutingModule { }
