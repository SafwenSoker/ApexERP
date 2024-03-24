import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';

@Component({
  selector: 'app-get-project',
  templateUrl: './get-project.component.html',
  styleUrl: './get-project.component.scss'
})
export class GetProjectComponent {

  @Input() project;

  constructor(private router: Router){}
  

  redirectToProjectDetails(){
    this.router.navigate(["/project-management-portal/my-projects",this.getProjectRoute()])
  }

  getProjectRoute(){
    console.log(this.project.getName().split(" ").join("-"));
    return this.project.getName().split(" ").join("-");
  }
}
