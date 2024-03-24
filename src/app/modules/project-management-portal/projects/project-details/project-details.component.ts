import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { AppState } from 'src/app/store/app.state';
import { getProject } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { loadProjects } from '../../state/project.actions';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  project!: Project;
  projectName: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  private ngUnsubscribe = new Subject<void>();


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('project');
      this.projectName = this.projectName.split("-").join(" ");
      this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' },{ label: this.projectName, routerLink: '/project-management-portal/my-projects/'+params.get('project') }];
      this.store.select(getProject(this.projectName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (project) => {
          this.project = project;
        });
    })
    this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
