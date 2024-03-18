import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Document } from 'src/app/models/workstation-portal/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  API_URL = "http://localhost:8080"
  constructor(private http: HttpClient) { }

  getDocuments(){
    return this.http.get(`${this.API_URL}/documents`);
  }

  getDocument(id: string){
    return this.http.get(`${this.API_URL}/document/${id}`);
  }

  newDocument(document: Document){
    return this.http.post(`${this.API_URL}/document`, document);
  }

  updateDocument(id: string, document: Document){
    return this.http.put(`${this.API_URL}/document/${id}`, document);
  }

  deleteDocument(id: string){
    return this.http.delete(`${this.API_URL}/document/${id}`);
  }

}
