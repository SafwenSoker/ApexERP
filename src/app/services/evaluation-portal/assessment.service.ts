import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Assessment, Question } from '../../models/evaluation-portal/assessment';
import { AssessmentStatus } from '../../models/evaluation-portal/assessment-status';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  API_URL = "http://197.26.19.240:9096/evaluation-portal"

  constructor(private http: HttpClient) { }

  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.API_URL).pipe(map((assessments) => { console.log(assessments); return assessments; }));
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.API_URL}/${id}`).pipe(map((assessment) => { console.log(assessment); return assessment; }));
  }

  createAssessment(assessment: Assessment): Observable<Assessment> {
    return this.http.post<Assessment>(this.API_URL, assessment).pipe(map((createdAssessment) => { console.log(createdAssessment); return createdAssessment; }));
  }

  getAssessmentByEmployee(employeeId: string): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(`${this.API_URL}/employee/${employeeId}`).pipe(map((assessments) => { console.log(assessments); return assessments; }));
  }

  deleteAssessment(id: string): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`).pipe(map((response) => { console.log(response); return response; }));
  }
}
