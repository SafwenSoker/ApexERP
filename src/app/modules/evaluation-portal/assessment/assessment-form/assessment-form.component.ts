 import { Component, OnInit } from '@angular/core';
import { Assessment, Question, ManagerResponse } from '../../../../models/evaluation-portal/assessment';
import { AssessmentStatus } from '../../../../models/evaluation-portal/assessment-status';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrl: './assessment-form.component.scss'
})
export class AssessmentFormComponent implements OnInit {
  assessment: Assessment;

  radioOptions = [
    { value: 1, label: 'Unsatisfactory' },
    { value: 2, label: 'Neutral' },
    { value: 3, label: 'Positive' },
    { value: 4, label: 'Significantly Positive' },
    { value: 5, label: 'Exceptional' },
  ];
  

  constructor() { }

  ngOnInit(): void {
    this.initializeAssessment();
  }

  initializeAssessment() {
    this.assessment = {
      id: 1,
      fiscalYear: 2023,
      cycleId: 1,
      employeeId: 123,
      submissionDate: new Date(),
      status: AssessmentStatus.PENDING,
      deadlineSelfAssessment: new Date('2024-12-31'),
      deadlineManagerReview: new Date('2025-01-15'),
      technicalQuestions: [
        { id: 1, text: 'Technical Question 1', score: 0 },
        { id: 2, text: 'Technical Question 2', score: 0 },
      ],
      observationalQuestions: [
        { id: 3, text: 'Observational Question 1', score: 0 },
        { id: 4, text: 'Observational Question 2', score: 0 },
      ],
      managerTechnicalResponses: [],
      managerObservationalResponses: [],
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
      getStatus() {
        return this.status;
      },
      getDeadlineSelfAssessment() {
        return this.deadlineSelfAssessment;
      },
      getDeadlineManagerReview() {
        return this.deadlineManagerReview;
      },
      getTechnicalQuestions() {
        return this.technicalQuestions;
      },
      getObservationalQuestions() {
        return this.observationalQuestions;
      },
      getManagerTechnicalResponses() {
        return this.managerTechnicalResponses;
      },
      getManagerObservationalResponses() {
        return this.managerObservationalResponses;
      },
      getMeetingNotes() {
        return this.meetingNotes;
      },
      getCreatedAt() {
        return this.createdAt;
      },
      getUpdatedAt() {
        return this.updatedAt;
      }
    } as Assessment;
  }
  
  submitAssessment() {
    // Add logic to handle form submission (e.g., send data to backend)
    console.log('Assessment Submitted:', this.assessment);
  }
}
