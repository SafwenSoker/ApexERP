import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'src/app/models/project-management-portal/status.model';
import { TaskTag } from 'src/app/models/project-management-portal/task-tag.model';
import { Task } from 'src/app/models/project-management-portal/task.model';
import { UserHRInfo } from 'src/app/models/self-service-portal/user-hrinfo.model';
import { EmployeesService } from 'src/app/services/employees-management-portal/employees.service';

interface Tag {
  name: string;
  code: number;
}

interface Urgency {
  type: string;
  code: number;
}

interface IStatus {
  progress: string;
  code: number;
}
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent implements OnInit {

  @Input() groupOfTasksId: number;
  @Input() taskStatus: Status;

  tags!: Tag[];
  selectedTags!: Tag[];
  rangeDates: Date[];
  visible: boolean = false;
  description: string = "";
  taskName: string = "";
  urgencies: Urgency[];
  selectedUrgency: Urgency;
  statuses: IStatus[];
  selectedStatus: IStatus;
  employees: UserHRInfo[];
  selectedEmployee: UserHRInfo;
  constructor(private employeesService: EmployeesService) { }


  ngOnInit(): void {
    
    this.tags = [
      { name: 'Bug', code: 0 },
      { name: 'Feature', code: 1 },
      { name: 'Improvement', code: 2 },
      { name: 'Documentation', code: 3 },
      { name: 'Refactoring', code: 4 }
    ];
    this.urgencies = [
      { type: "Low", code: 0},
      { type: "Medium", code: 1 },
      { type: "High", code: 2 }
    ]
    this.statuses = [
      { progress: "New", code: 0},
      { progress: "In Progress", code: 1},
      { progress: "On Hold", code: 2},
      { progress: "Done", code: 3}
    ]
  }



  showDialog() {
    this.visible = true;
  }
  addTask() {
    console.log(this.taskName, this.rangeDates[0], this.rangeDates[1], this.description,this.selectedStatus.code, this.selectedTags.map((status)=> {return status.code}), this.selectedUrgency.code)
    let task: Task = new Task(0, this.taskName, this.rangeDates[1], 1, this.rangeDates[0], this.rangeDates[1], this.description, this.selectedStatus.code, this.selectedTags.map((status)=> {return status.code}), this.selectedUrgency.code, 1, 1)

  }


}
