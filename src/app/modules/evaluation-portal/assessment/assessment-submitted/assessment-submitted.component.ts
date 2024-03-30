import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-assessment-submitted',
    templateUrl: './assessment-submitted.component.html',
    styleUrl: './assessment-submitted.component.scss',
})
export class AssessmentSubmittedComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    checkAssessmentStatus() {
        // Add logic to check assessment status
        console.log('Checking assessment status...');
    }

    checkPreviousAssessments() {
        // Add logic to check previous assessments
        console.log('Checking previous assessments...');
    }
}
