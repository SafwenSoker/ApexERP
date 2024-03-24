import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getTask } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { loadProjects } from '../../state/project.actions';
import * as FileSaver from 'file-saver';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss'
})
export class TaskDetailsComponent implements OnInit, OnDestroy {
  task!: Task;
  projectName: string;
  groupOfTasksName: string;
  taskName: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  cols!: Column[];

  exportColumns!: ExportColumn[];

  private ngUnsubscribe = new Subject<void>();


  constructor(private route: ActivatedRoute, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
    this.route.paramMap.subscribe((params) => {
      this.projectName = params.get('project');
      this.groupOfTasksName = params.get('groupOfTasks');
      this.taskName = params.get('task');
      this.projectName = this.projectName.split("-").join(" ");
      this.groupOfTasksName = this.groupOfTasksName.split("-").join(" ");
      this.taskName = this.taskName.split("-").join(" ");
      this.items = [{ label: 'My Projects', routerLink: '/project-management-portal/my-projects' }, { label: this.projectName, routerLink: '/project-management-portal/my-projects/' + params.get('project') }, { label: this.groupOfTasksName, routerLink: '/project-management-portal/my-projects/' + params.get('project') + "/group/" + params.get('groupOfTasks') }, { label: this.taskName, routerLink: '/project-management-portal/my-projects/' + params.get('project') + "/group/" + params.get('groupOfTasks') + "/task/" + params.get("task") }];
      this.store.select(getTask(this.projectName, this.groupOfTasksName, this.taskName)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (task) => {
          this.task = task;
        }
      );
    })
    this.home = { icon: 'pi pi-home', routerLink: '/project-management-portal/my-projects' };
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  exportPdf() {
    import('jspdf').then((jsPDF) => {
      import('jspdf-autotable').then((x) => {
        const doc = new jsPDF.default();
  
        // Get task data
        const task = this.task;
  
        // Add task details
        const startY = 20;
        let currentY = startY;
  
        doc.setFontSize(16);
        doc.text("Task Details:", 10, currentY);
        currentY += 10;
  
        doc.setFontSize(12);
        doc.text(`ID: ${task.getId()}`, 10, currentY);
        currentY += 7;
        doc.text(`Name: ${task.getName()}`, 10, currentY);
        currentY += 7;
        doc.text(`Deadline: ${task.getDeadline()}`, 10, currentY);
        // Add other task details similarly
  
        // Add a table for the to-do list
        currentY += 10;
        doc.text("To-Do List:", 10, currentY);
        currentY += 10;
  
        const toDoList = task.getToDoList();
        const tableData = toDoList.map(item => [item]);
        const tableOptions = {
          startY: currentY
        };
  
        (doc as any).autoTable({
          head: [['To Do Item']],
          body: tableData,
          startY: currentY + 5,
          theme: 'striped',
          tableWidth: 'auto',
          margin: { left: 10 },
        });
  
        // Save the document
        doc.save('task_details.pdf');
      });
    });
  }
  
  
  




}
