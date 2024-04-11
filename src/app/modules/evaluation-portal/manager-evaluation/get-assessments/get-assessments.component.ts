import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';
import { AssessmentStatus } from 'src/app/models/evaluation-portal/assessment-status';

@Component({
    selector: 'app-get-assessments',
    templateUrl: './get-assessments.component.html',
    styleUrl: './get-assessments.component.scss',
})
export class GetAssessmentsComponent implements OnInit, OnDestroy {
    assessments!: Assessment[];
    constructor() {}
    ngOnInit() {
        this.assessments = [
            {
              id: 1,
              fiscalYear: 2023,
              cycleId: 1,
              employeeId: 123,
              submissionDate: new Date(),
              status: AssessmentStatus.PENDING,
              deadlineSelfAssessment: new Date('2024-12-31'),
              deadlineManagerReview: new Date('2025-01-15'),
              questions: [
                { id: 1, type: "technical", text: 'Technical Question 1', score: 1, managerScore: 2 },
                { id: 2, type: "technical", text: 'Technical Question 2', score: 2, managerScore: 3 },
                { id: 3, type: "observational", text: 'Observational Question 1', score: 3, managerScore: 4 },
                { id: 4, type: "observational", text: 'Observational Question 2', score: 4, managerScore: 5 }
              ],
              relatedManager: 4,
              meetingNotes: '',
              createdAt: new Date(),
              updatedAt: new Date(),
              getId() {
                return this.id;
              },
              getFiscalYear() {
                return this.fiscalYear;
              },
              getCycleId() {
                return this.cycleId;
              },
              getEmployeeId() {
                return this.employeeId;
              },
              getSubmissionDate() {
                return this.submissionDate;
              },
              getRelatedManager() {
                  return this.relatedManager;
              },
              getStatus() {
                return this.status;
              },
              getDeadlineSelfAssessment() {
                return this.deadlineSelfAssessment;
              },
              getDeadlineManagerReview() {
                return this.deadlineManagerReview;
              },
              getQuestions() {
                return this.questions;
              },
              // getTechnicalQuestions() {
              //   return this.technicalQuestions;
              // },
              // getObservationalQuestions() {
              //   return this.observationalQuestions;
              // },
              // getManagerTechnicalResponses() {
              //   return this.managerTechnicalResponses;
              // },
              // getManagerObservationalResponses() {
              //   return this.managerObservationalResponses;
              // },
              getMeetingNotes() {
                return this.meetingNotes;
              },
              getCreatedAt() {
                return this.createdAt;
              },
              getUpdatedAt() {
                return this.updatedAt;
              }
            },
            // Add more assessments as needed
          ];
    }
    ngOnDestroy() {}

   
}
