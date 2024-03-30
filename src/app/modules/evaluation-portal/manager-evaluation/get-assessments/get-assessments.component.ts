import { Component, OnInit, OnDestroy } from '@angular/core';
import { Assessment } from 'src/app/models/evaluation-portal/assessment';

@Component({
    selector: 'app-get-assessments',
    templateUrl: './get-assessments.component.html',
    styleUrl: './get-assessments.component.scss',
})
export class GetAssessmentsComponent implements OnInit, OnDestroy {
    assessments!: Assessment[];
    constructor() {}
    ngOnInit() {}
    ngOnDestroy() {}
}
