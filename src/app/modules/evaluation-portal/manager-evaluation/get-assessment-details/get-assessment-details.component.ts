import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

@Component({
    selector: 'app-get-assessment-details',
    templateUrl: './get-assessment-details.component.html',
    styleUrl: './get-assessment-details.component.scss',
})
export class GetAssessmentDetailsComponent {
    assessmentId: string;
    assessment: Assessment;

    radioOptions = [
        { value: 1, label: 'Unsatisfactory' },
        { value: 2, label: 'Neutral' },
        { value: 3, label: 'Positive' },
        { value: 4, label: 'Significantly Positive' },
        { value: 5, label: 'Exceptional' },
    ];

    private ngUnsubscribe = new Subject<void>();
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private assessmentService: AssessmentService
    ) {}

    redirectToAssessment() {
        this.router.navigate(['/evaluation-portal/manager-evaluation']);
    }
    updateAssessment() {
        // Save the current data of the assessment in a variable
        const updatedAssessmentData = { ...this.assessment,
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
         };



        // Delete the assessment
        this.assessmentService.deleteAssessment(this.assessmentId)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                // Recreate the assessment
                this.assessmentService.createAssessment(updatedAssessmentData)
                    .pipe(takeUntil(this.ngUnsubscribe))
                    .subscribe((recreatedAssessment) => {
                        // Optionally, you can update this.assessment with the recreated assessment
                        this.assessment = recreatedAssessment;
                        console.log('Assessment updated:', this.assessment);
                    });
            });
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.assessmentId = params.get('id');
            this.assessmentService
                .getAssessment(this.assessmentId)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe((assessment) => {
                    this.assessment = assessment;
                    // this.assessment.questions.forEach(question => {
                    //     question.managerScore = question.score + 1;
                    // });
                });
        });

        console.log(this.assessment);
    }
}
