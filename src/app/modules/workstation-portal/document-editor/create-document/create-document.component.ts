import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.scss',
  providers: [MessageService]

})
export class CreateDocumentComponent implements OnInit, OnDestroy{
  
  API_UPLOAD_URL = "http://197.26.19.240:9097/document-service/documents" 
  constructor(private messageService: MessageService) { }
  
  onBasicUploadAuto(event: UploadEvent) {
    
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode' });
}
  ngOnDestroy(): void {
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
