import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateDocumentComponent } from './create-document/create-document.component';
import { UpdateDocumentComponent } from './update-document/update-document.component';
import { GetDocumentComponent } from './get-document/get-document.component';
import { GetDocumentsComponent } from './get-documents/get-documents.component';

import { DocumentEditorRoutingModule } from './document-editor-routing.module';
import { EditorModule } from 'primeng/editor';
import { TreeModule } from 'primeng/tree';
import { ButtonModule } from 'primeng/button';
import { InplaceModule } from 'primeng/inplace';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    CreateDocumentComponent,
    UpdateDocumentComponent,
    GetDocumentComponent,
    GetDocumentsComponent
  ],
  imports: [
    CommonModule,
    DocumentEditorRoutingModule,
    EditorModule,
    TreeModule,
    ButtonModule,
    InputTextModule,
    InplaceModule,
    ReactiveFormsModule,
    FileUploadModule,
    ToastModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DocumentEditorModule { }
