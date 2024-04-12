import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { Document } from 'src/app/models/workstation-portal/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  API_URL = "http://197.26.19.240:9097/document-service/documents"
  constructor(private http: HttpClient) { }

  getDocuments():Observable<Document[]>{
    return this.http.get<Document[]>(`${this.API_URL}`).pipe(
      map((documents) => {
        console.log(documents)
        return documents;
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  newDocument(document: Document){
    return this.http.post(`${this.API_URL}/document`, document);
  }


  deleteDocument(id: string){
    return this.http.delete(`${this.API_URL}/document/${id}`);
  }

}
