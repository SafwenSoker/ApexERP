import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { AppState } from 'src/app/store/app.state';
import { getTask } from '../../state/project.selector';
import { MenuItem } from 'primeng/api';
import { loadProjects, loadTasks } from '../../state/project.actions';
import * as FileSaver from 'file-saver';
import { Inplace } from 'primeng/inplace';
import { FormControl, FormGroup } from '@angular/forms';


interface Tag {
  name: string;
  code: number;
}

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
export class TaskDetailsComponent implements OnInit, OnDestroy, OnChanges {
  task!: Task;
  @Input() taskId: number;
  @ViewChild('descriptionInplace') descriptionInplace!: Inplace;
  @ViewChild('tagsInplace') tagsInplace!: Inplace;

  todoDialog: boolean = false;
  newTodo: string;
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  cols!: Column[];
  visible: boolean = false;
  taskName: string;
  exportColumns!: ExportColumn[];
  text: string = '<div>Hello World!</div><div>PrimeNG <b>Editor</b> Rocks</div><div><br></div>';
  tags!: Tag[];
  selectedTags!: Tag[];

  taskDescriptionEditorForm: FormGroup | undefined;

  private ngUnsubscribe = new Subject<void>();


  constructor(private store: Store<AppState>) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['taskId'] && changes['taskId'].currentValue) {
      this.store.select(getTask(this.taskId)).pipe(takeUntil(this.ngUnsubscribe)).subscribe(
        (task) => {
          this.task = task;
          this.taskName = this.task.getName();
          console.log(this.task.getDescription())
          this.taskDescriptionEditorForm = new FormGroup({
            text: new FormControl(this.task.getDescription())
          });
          console.log(this.task.getTags())
          console.log("Selected tags:",this.tags.filter(tag => this.task.getTags().includes(tag.code)));
          this.selectedTags = this.tags.filter(tag => this.task.getTags().includes(tag.code));
        }
      );
      this.visible = true;
    }
  }

  ngOnInit(): void {
    this.tags = [
      { name: 'Bug', code: 0 },
      { name: 'Feature', code: 1 },
      { name: 'Improvement', code: 2 },
      { name: 'Documentation', code: 3 },
      { name: 'Refactoring', code: 4 }
    ];    
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

        // const toDoList = task.getToDoList();
        // const tableData = toDoList.map(item => [item]);
        // const tableOptions = {
        //   startY: currentY
        // };

        (doc as any).autoTable({
          head: [['To Do Item']],
          // body: tableData,
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

  addTodo() {
    this.todoDialog = true;
  }

  hideDialog() {
    this.todoDialog = false;
  }

  saveTodo() {
    this.todoDialog = false;
    // console.log(this.task);
    // this.task.addTodo(this.newTodo);
    // console.log(this.task.getToDoList())
    // Update Task
    // this.store.dispatch(updateTask({ updatedTask: this.task}))
  }

  deleteTodo(todo: string) {
    // this.task.deleteTodo(todo);
    // Update Task
    // this.store.dispatch(updateTask({ updatedTask: this.task}))
  }

  saveDescription() {
    this.descriptionInplace.deactivate();
  }

  updateTaskTags(){
    this.tagsInplace.deactivate();
  }



}
