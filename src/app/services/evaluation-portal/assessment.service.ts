import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment, Question } from '../../models/evaluation-portal/assessment';
import { AssessmentStatus } from '../../models/evaluation-portal/assessment-status';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {
  API_URL = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAssessments(): Observable<Assessment[]> {
    const assessments: Assessment[] = [
      new Assessment(
        1,
        2024,
        1,
        1,
        new Date('2024-04-01'),
        AssessmentStatus.PENDING,
        new Date('2024-04-15'),
        new Date('2024-04-30'),
        [
          { id: 1, type: "Technical", text: 'Technical Question 1', score: 1, managerScore: 2 },
          { id: 2, type: "Technical", text: 'Technical Question 2', score: 2, managerScore: 3 },
          { id: 3, type: "Observational", text: 'Observational Question 1', score: 3, managerScore: 4 },
          { id: 4, type: "Observational", text: 'Observational Question 1', score: 4, managerScore: 5 },
        ],
        
        10,
        'Meeting notes for Assessment 1',
        new Date(),
        new Date()
      ),
      new Assessment(
        2,
        2024,
        1,
        1,
        new Date('2024-04-01'),
        AssessmentStatus.PENDING,
        new Date('2024-04-15'),
        new Date('2024-04-30'),
        [
          { id: 1, type: "Technical", text: 'Technical Question 1', score: 5, managerScore: 2 },
          { id: 2, type: "Technical", text: 'Technical Question 2', score: 5, managerScore: 3 },
          { id: 3, type: "Observational", text: 'Observational Question 1', score: 3, managerScore: 4 },
          { id: 4, type: "Observational", text: 'Observational Question 1', score: 4, managerScore: 5 },
        ],
        
        10,
        'Meeting notes for Assessment 1',
        new Date(),
        new Date()
      ),
    ];

    return new Observable<Assessment[]>(observer => {
      //observer.next(assessments.filter((assessment) => assessment.getGroupOfAssessmentsId() == groupOfAssessmentsId))
      observer.complete()
    })
    //return this.http.get<Task[]>(${this.API_URL}/tasks);

  }

  getAssessment(id: string): Observable<Assessment> {
    
    return new Observable<Assessment>(observer => {
      
      observer.next(new Assessment(
        1,
        2024,
        1,
        1,
        new Date('2024-04-01'),
        AssessmentStatus.PENDING,
        new Date('2024-04-15'),
        new Date('2024-04-30'),
        [
          { id: 1, type: "technical", text: 'Technical Question 1', score: 1, managerScore: 2 },
          { id: 2, type: "technical", text: 'Technical Question 2', score: 2, managerScore: 3 },
          { id: 3, type: "observational", text: 'Observational Question 1', score: 3, managerScore: 4 },
          { id: 4, type: "observational", text: 'Observational Question 1', score: 4, managerScore: 5 },
        ],
        
        10,
        'Meeting notes for Assessment 1',
        new Date(),
        new Date()
      ));
      observer.complete();
    })
  }
}
