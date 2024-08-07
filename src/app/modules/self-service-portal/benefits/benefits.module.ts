import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GetBenefitsComponent } from './get-benefits/get-benefits.component';
import { GetBenefitComponent } from './get-benefit/get-benefit.component';
import { CreateBenefitComponent } from './create-benefit/create-benefit.component';
import { UpdateBenefitComponent } from './update-benefit/update-benefit.component';
import { RequestBenefitComponent } from './request-benefit/request-benefit.component';
import { GetBenefitsRequestsComponent } from './get-benefits-requests/get-benefits-requests.component';

import { BenefitsRoutingModule } from './benefits-routing.module';

import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InplaceModule } from 'primeng/inplace';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    GetBenefitsComponent,
    GetBenefitComponent,
    CreateBenefitComponent,
    UpdateBenefitComponent,
    RequestBenefitComponent,
    GetBenefitsRequestsComponent
  ],
  imports: [
    CommonModule,
    BenefitsRoutingModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    TabMenuModule,
    TableModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextModule,
    InplaceModule,
    DropdownModule,
    InputTextareaModule,
    SkeletonModule
  ],
  providers:[
    ConfirmationService,
    MessageService
  ]
})
export class BenefitsModule { }
