import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from 'src/app/demo/service/node.service';

@Component({
  selector: 'app-get-documents',
  templateUrl: './get-documents.component.html',
  styleUrl: './get-documents.component.scss'
})
export class GetDocumentsComponent  implements OnInit {
  files!: TreeNode[];

  selectedDocument!: TreeNode;
  
  constructor(private nodeService: NodeService) {}

  ngOnInit() {
      this.nodeService.getFiles().then((data) => (this.files = data));
  }
}
