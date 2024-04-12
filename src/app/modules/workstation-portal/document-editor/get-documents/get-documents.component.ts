import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { NodeService } from 'src/app/demo/service/node.service';
import { Document } from 'src/app/models/workstation-portal/document.model';
import { DocumentsService } from 'src/app/services/workstation-portal/documents.service';

@Component({
  selector: 'app-get-documents',
  templateUrl: './get-documents.component.html',
  styleUrl: './get-documents.component.scss'
})
export class GetDocumentsComponent implements OnInit {
  documents: Document[] = [];
  files: TreeNode[] = [];
  noFiles: boolean = false;

  selectedDocument!: TreeNode;
  private ngUnsubscribe = new Subject<void>();


  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
    this.documentsService.getDocuments().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (documents) => {
        this.documents = documents;
        if (this.documents.length == 0) {
          this.noFiles = true;
          
        } else {
          console.log("here")
          this.files.push({
            "key": "0",
            "label": "Documents",
            "data": "Documents Folder",
            "icon": "pi pi-fw pi-inbox",
            "children": this.documents.map((document) => {
              return { id: this.formatId(+document.id), label: document.url, data: document.id }
            })
          })
        }

      });
  }

  formatId(id: number): string {
    return `0-${id}`;
  }
}
