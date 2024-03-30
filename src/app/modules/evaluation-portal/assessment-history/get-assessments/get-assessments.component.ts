import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';
import { AssessmentStatus } from 'src/app/models/evaluation-portal/assessment-status';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

@Component({
  selector: 'app-get-assessments',
  templateUrl: './get-assessments.component.html',
  styleUrl: './get-assessments.component.scss'
})
export class GetAssessmentsComponent implements OnInit, OnDestroy {

  constructor(private assessmentService: AssessmentService) {}
assessments: Assessment[];
private ngUnsubscribe = new Subject<void>();

  ngOnInit(): void {
    // Initialization logic if needed
    this.assessmentService.getAssessments().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      (assessments) => {
        this.assessments = assessments;
      }
    );

    this.assessments = [
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
console.log(this.assessments);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  redirectToAssessmentDetails() {
    // Assuming you have a route for assessment details and need to pass assessment ID
    //this.router.navigate(['/assessment-details', this.assessment.getId()]);
  }
}



