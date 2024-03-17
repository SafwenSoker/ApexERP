import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDocumentsComponent } from './get-documents/get-documents.component';

const routes: Routes = [
  {
    path: "", component: GetDocumentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentEditorRoutingModule { }
