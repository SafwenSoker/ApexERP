import { TaskStatus } from "./task-status.model";
import { TaskTag } from "./task-tag.model";
import { TaskUrgency } from "./task-urgency.model";

export class Task {
    private id: String;
    private name: String;
    private deadline: Date;
    private userId: String;
    private startDate: String;
    private endDate: String;
    private description: String;
    private to_do_list: String[];
    private projectId: String;
    private sprintId: String;
    private status: TaskStatus;
    private tags: TaskTag[];
    private urgency: TaskUrgency;

    constructor(id: String, name: String, deadline: Date,userId: String, startDate: String, endDate: String, description: String, status: TaskStatus, tags: TaskTag[], urgency: TaskUrgency, to_do_list: String, projectId: String, sprintId: String) {
        this.id = id;
        this.name = name;
        this.deadline = deadline;
        this.status = status;
        this.tags = tags;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.to_do_list = to_do_list.split(",");
        this.projectId = projectId;
        this.sprintId = sprintId;
    }

    getDocumentsTreeRepresentation() {
        return {
            key: this.id,
            label: this.name,
            icon: "pi pi-fw pi-file"
        }
    }
}
