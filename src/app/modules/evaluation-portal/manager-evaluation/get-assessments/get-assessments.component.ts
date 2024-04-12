import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';
import { AssessmentStatus } from 'src/app/models/evaluation-portal/assessment-status';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

@Component({
    selector: 'app-get-assessments',
    templateUrl: './get-assessments.component.html',
    styleUrl: './get-assessments.component.scss',
})
export class GetAssessmentsComponent implements OnInit, OnDestroy {
    assessments!: Assessment[];
    private ngUnsubscribe = new Subject<void>();

    constructor(private assessmentService: AssessmentService) {}
    ngOnInit() {
      this.assessmentService.getAssessments().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (assessments) => {
          this.assessments = assessments
          console.log(this.assessments);
        }
      );
    }
    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
