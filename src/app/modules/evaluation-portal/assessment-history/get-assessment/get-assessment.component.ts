import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssessmentService } from 'src/app/services/evaluation-portal/assessment.service';

@Component({
  selector: 'app-get-assessment',
  templateUrl: './get-assessment.component.html',
  styleUrl: './get-assessment.component.scss'
})
export class GetAssessmentComponent implements OnInit, OnDestroy{
  @Input() assessment;

  constructor(private router: Router){}
  
  ngOnInit(): void {
    
  }
  
  ngOnDestroy(): void {
    
  }

  redirectToAssessmentDetails(){
    this.router.navigate(["/evaluation-portal/assessment-history", this.assessment.id])
  }

  getAssessmentRoute(){
    console.log(this.assessment.getName().split(" ").join("-"));
    return this.assessment.getName().split(" ").join("-");
  }
}