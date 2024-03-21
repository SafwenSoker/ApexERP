import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { TaskStatus } from 'src/app/models/project-management-portal/task-status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { TaskUrgency } from 'src/app/models/project-management-portal/task-urgency.model';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { ProjectsService } from 'src/app/services/project-management-portal/projects.service';

@Component({
  selector: 'app-get-projects',
  templateUrl: './get-projects.component.html',
  styleUrl: './get-projects.component.scss'
})
export class GetProjectsComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  projects : Project[];
  private ngUnsubscribe = new Subject<void>();
  constructor(private projectsService: ProjectsService){}
  ngOnInit() {
      this.projectsService.getProjects().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (projects) => {
          this.projects = projects;
        }
      );
      this.projects = [
        new Project(1,"Project Name", "Brief Description", [
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ])
        ]),
        new Project(2,"Project Name", "Brief Description", [
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ])
        ]),
        new Project(3,"Project Name", "Brief Description", [
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ]),
          new GroupOfTasks(new Date(),new Date(),new Date(),new Date(),[
            new Task(1, "Task Name",new Date(),2, new Date(), new Date(),"Task Description",TaskStatus.DONE,[TaskTag.BUG,TaskTag.IMPROVEMENT],TaskUrgency.HIGH,"Something To do,Another Thing to do", 1, 1)
          ])
        ])
      ]
      this.items = [{ label: 'Computer' }, { label: 'Notebook' }, { label: 'Accessories' }, { label: 'Backpacks' }, { label: 'Item' }];

      this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };
  }
}