 import { Component, OnInit } from '@angular/core';
import { Assessment, Question } from '../../../../models/evaluation-portal/assessment';
import { AssessmentStatus } from '../../../../models/evaluation-portal/assessment-status';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

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
  

  constructor(private assessmentService: AssessmentService) { }

  ngOnInit(): void {
    this.initializeAssessment();
  }
  private getTrimesterId(month: number): number {
    return Math.floor((month + 3) / 3);
  }
  initializeAssessment() {
    const currentDate = new Date();

    this.assessment = {
      fiscalYear: new Date().getFullYear(),
      cycleId: this.getTrimesterId(currentDate.getMonth()),
      employeeId: "e105ed86-bb83-4efd-99b0-7532b40a3282",
      submissionDate: currentDate,
      status: AssessmentStatus.PENDING,
      deadlineSelfAssessment:  new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000),
      deadlineManagerReview: new Date(currentDate.getTime() + 14 * 24 * 60 * 60 * 1000),
      questions: [{ id: 1, type: "technical", text: 'Technical Question 1' },
      { id: 2, type: "technical", text: 'Technical Question 2'},
      { id: 3, type: "observational", text: 'Observational Question 1'},
      { id: 4, type: "observational", text: 'Observational Question 1'},],
      relatedManager: 1,
      meetingNotes: '',
      createdAt: currentDate,
      updatedAt: currentDate,

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
      getQuestions() {
        return this.questions;
      },
      getRelatedManager() {
        return this.relatedManager;
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

    this.assessmentService.createAssessment(this.assessment).subscribe((createdAssessment) => {
      console.log('Assessment created:', createdAssessment);
      // Handle success or any other logic
    }, (error) => {
      console.error('Error creating assessment:', error);
      // Handle error
    });
  }

  
}
