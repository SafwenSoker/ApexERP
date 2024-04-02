import { TaskStatus } from "./task-status.model";
import { TaskTag } from "./task-tag.model";
import { TaskUrgency } from "./task-urgency.model";

export class Task {
    private id?: number;
    public name?: string;
    private deadline?: Date;
    private employeeId?: number;
    private startDate?: Date;
    private endDate?: Date;
    public description?: string;
    private projectId?: number;
    private groupOfTasksId?: number;
    private status?: TaskStatus;
    private tags?: TaskTag[];
    private urgency?: TaskUrgency;

    constructor(id?: number, name?: string, deadline?: Date, employeeId?: number, startDate?: Date, endDate?: Date, description?: string, status?: TaskStatus, tags?: TaskTag[], urgency?: TaskUrgency, projectId?: number, groupOfTasksId?: number) {
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
        this.projectId = projectId;
        this.groupOfTasksId = groupOfTasksId;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name;
    }

    public getDeadline() {
        return this.deadline;
    }

    public getEmployeeId() {
        return this.employeeId;
    }

    public getStartDate() {
        return this.startDate;
    }

    public getEndDate() {
        return this.endDate;
    }

    public getDescription() {
        return this.description;
    }

    public getProjectId() {
        return this.projectId;
    }

    public getGroupOfTasksId() {
        return this.groupOfTasksId;
    }

    public getStatus() {
        return this.status;
    }

    public getTags() {
        return this.tags;
    }

    public getUrgency() {
        return this.urgency;
    }

    getDocumentsTreeRepresentation() {
        return {
            key: this.id,
            label: this.name,
            icon: "pi pi-fw pi-file"
        }
    }


    setStatus(status: TaskStatus) {
        if (Object.values(TaskStatus).includes(status)) {
            this.status = status;
        } else {
            throw new Error("Invalid task status");
        }
    }

    setTags(tags : TaskTag[]){
        this.tags = tags;
    }
}

