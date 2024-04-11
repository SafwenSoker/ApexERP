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
            { id: 5, type: "technical", text: 'Technical Question 3', score: 4, managerScore: 3},
            { id: 6, type: "technical", text: 'Technical Question 4', score: 3, managerScore: 1},
            { id: 7, type: "observational", text: 'observational Question 3', score: 4, managerScore: 3},
            { id: 8, type: "observational", text: 'observational Question 4', score: 3, managerScore: 1},
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
          2,
          new Date('2024-04-02'),
          AssessmentStatus.IN_PROGRESS,
          new Date('2024-04-16'),
          new Date('2024-05-01'),
          [
            { id: 5, type: "technical", text: 'Technical Question 3', score: 4, managerScore: 3},
            { id: 6, type: "technical", text: 'Technical Question 4', score: 3, managerScore: 1},
            { id: 7, type: "observational", text: 'observational Question 3', score: 4, managerScore: 3},
            { id: 8, type: "observational", text: 'observational Question 4', score: 3, managerScore: 1},
          ],
          
          11,
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



