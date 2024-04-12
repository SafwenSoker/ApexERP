import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

@Component({
    selector: 'app-get-assessment-details',
    templateUrl: './get-assessment-details.component.html',
    styleUrl: './get-assessment-details.component.scss',
})
export class GetAssessmentDetailsComponent implements OnInit {
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

    redirectToAssessment(){
        this.router.navigate(["/evaluation-portal/assessment-history"])

    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.assessmentId = params.get('id');
            this.assessmentService
                .getAssessment(this.assessmentId)
                .pipe(takeUntil(this.ngUnsubscribe))
                .subscribe((assessment) => {
                    this.assessment = assessment;
                    this.assessment.questions.forEach(question => {
                        question.managerScore = question.score + 1;
                    });
                });
        });

        console.log(this.assessment);
    }
}
