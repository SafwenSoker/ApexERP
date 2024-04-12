import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Assessment, Question } from '../../models/evaluation-portal/assessment';
import { AssessmentStatus } from '../../models/evaluation-portal/assessment-status';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  API_URL = "http://localhost:9096/evaluation-portal"

  constructor(private http: HttpClient) { }

  getAssessments(): Observable<Assessment[]> {
    return this.http.get<Assessment[]>(this.API_URL).pipe(map((assessments) => { console.log(assessments); return assessments; }));
  }

  getAssessment(id: string): Observable<Assessment> {
    return this.http.get<Assessment>(`${this.API_URL}/${id}`).pipe(map((assessment) => { console.log(assessment); return assessment; }));
  }

  createAssessment(): Observable<Assessment> {
    return this.http.get<Assessment>(this.API_URL).pipe(map((assessment) => { console.log(assessment); return assessment; }));
  }
}
