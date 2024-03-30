import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-assessment',
  templateUrl: './self-assessment.component.html',
  styleUrl: './self-assessment.component.scss'
})
export class SelfAssessmentComponent implements OnInit {
  hasSubmittedAssessment: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // Check if the user has already submitted an assessment
    // For demonstration purposes, assume a boolean variable indicates this
    this.hasSubmittedAssessment = this.checkSubmittedAssessment();
  }

  checkSubmittedAssessment(): boolean {
    // Add logic here to check if the user has already submitted an assessment
    // For example, you can use a service or a stored variable
    return true; // Assume true if already submitted
  }
}
