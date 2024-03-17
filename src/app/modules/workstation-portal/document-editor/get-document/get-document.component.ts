import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Document } from 'src/app/models/workstation-portal/document.model';

@Component({
  selector: 'app-get-document',
  templateUrl: './get-document.component.html',
  styleUrl: './get-document.component.scss'
})
export class GetDocumentComponent implements OnInit {
  @Input() document: Document;
  documentFormGroup: FormGroup | undefined;

  ngOnInit() {
      this.documentFormGroup = new FormGroup({
          name: new FormControl(this.document.getName()),
          text: new FormControl(this.document.getText()),
          description: new FormControl(this.document.getDescription())
      });
  }

  save(){

  }

  reset(){}
}
