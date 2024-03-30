import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assessment, Question, ManagerResponse } from '../../models/evaluation-portal/assessment';
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
          { id: 1, text: 'Technical Question 1', score: 5 },
          { id: 2, text: 'Technical Question 2', score: 4 },
        ],
        [
          { id: 3, text: 'Observational Question 1', score: 3 },
          { id: 4, text: 'Observational Question 2', score: 2 },
        ],
        10,
        [
          { questionId: 1, newScore: 4 },
          { questionId: 2, newScore: 2 },
        ],
        [
          { questionId: 3, newScore: 4 },
          { questionId: 4, newScore: 2 },
        ],
        'Meeting notes for Assessment 1',
        new Date(),
        new Date()
      ),
      new Assessment(
        2,
        2024,
        1,
        2,
        new Date('2024-04-02'),
        AssessmentStatus.IN_PROGRESS,
        new Date('2024-04-16'),
        new Date('2024-05-01'),
        [
          { id: 5, text: 'Technical Question 3', score: 4 },
          { id: 6, text: 'Technical Question 4', score: 3 },
        ],
        [
          { id: 7, text: 'Observational Question 3', score: 2 },
          { id: 8, text: 'Observational Question 4', score: 1 },
        ],
        11,
        [
          { questionId: 5, newScore: 3 },
          { questionId: 6, newScore: 1 },
        ],
        [
          { questionId: 7, newScore: 3 },
          { questionId: 8, newScore: 1 },
        ],
        'Meeting notes for Assessment 2',
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
}
