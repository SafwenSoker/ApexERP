import { TaskStatus } from "./task-status.model";
import { TaskTag } from "./task-tag.model";
import { TaskUrgency } from "./task-urgency.model";

export class Task {
    private id: Number;
    private name: String;
    private deadline: Date;
    private employeeId: Number;
    private startDate: Date;
    private endDate: Date;
    private description: String;
    private toDoList: String[];
    private projectId: Number;
    private groupOfTasksId: Number;
    private status: TaskStatus;
    private tags: TaskTag[];
    private urgency: TaskUrgency;

    constructor(id: Number, name: String, deadline: Date,employeeId: Number, startDate: Date, endDate: Date, description: String, status: TaskStatus, tags: TaskTag[], urgency: TaskUrgency, toDoList: String, projectId: Number, groupOfTasksId: Number) {
        this.id = id;
        this.name = name;
        this.deadline = deadline;
        this.status = status;
        this.tags = tags;
        this.employeeId = employeeId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.urgency = urgency;
        this.toDoList = toDoList.split(",");
        this.projectId = projectId;
        this.groupOfTasksId = groupOfTasksId;
    }

    getDocumentsTreeRepresentation() {
        return {
            key: this.id,
            label: this.name,
            icon: "pi pi-fw pi-file"
        }
    }
}
