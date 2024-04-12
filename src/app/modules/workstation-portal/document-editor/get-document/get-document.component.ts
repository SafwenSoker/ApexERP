import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Document } from 'src/app/models/workstation-portal/document.model';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-get-document',
  templateUrl: './get-document.component.html',
  styleUrl: './get-document.component.scss'
})
export class GetDocumentComponent implements OnInit, OnChanges {
  @Input() document: Document;
  documentFormGroup: FormGroup | undefined;
  image: boolean = false;
  pdf: boolean = false;
  imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'svg'];
  constructor(){
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';

  }
  ngOnInit() {

  }

  save() {

  }

  reset() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['document']) {
      console.log(changes['document'].currentValue.label)
      if (this.imageExtensions.includes(this.getFileExtension(changes['document'].currentValue.label))) {
        this.image = true
        this.pdf = false;
      }else if (this.getFileExtension(changes['document'].currentValue.label) == "pdf"){
        this.pdf = true
        this.image= false;
      }
    }
  }

  getFileExtension(fileName: string): string {
    // Split the file name by dot (.)
    const parts = fileName.split('.');

    // Extract the extension from the last part
    const extension = parts[parts.length - 1];

    return extension.toLowerCase(); // Convert to lowercase for case-insensitive comparison
  }

}
