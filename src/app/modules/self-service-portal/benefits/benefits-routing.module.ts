import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetBenefitsComponent } from './get-benefits/get-benefits.component';
import { GetBenefitsRequestsComponent } from './get-benefits-requests/get-benefits-requests.component';

const routes: Routes = [
  {
    path: "", component: GetBenefitsComponent
  },
  {
    path: "requests", component: GetBenefitsRequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BenefitsRoutingModule { }
