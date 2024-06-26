import { Status } from "./status.model";
import { TaskTag } from "./task-tag.model";
import { TaskUrgency } from "./task-urgency.model";

export class Task {
    id?: number;
    public name?: string;
    deadline?: Date;
    employeeId?: number;
    startDate?: Date;
    endDate?: Date;
    public description?: string;
    projectId?: number;
    groupOfTasksId?: number;
    status?:Status;
    tags?: TaskTag[];
    urgency?: TaskUrgency;

    constructor(id?: number, name?: string, deadline?: Date, employeeId?: number, startDate?: Date, endDate?: Date, description?: string, status?: Status, tags?: TaskTag[], urgency?: TaskUrgency, projectId?: number, groupOfTasksId?: number) {
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


    setStatus(status: Status) {
        if (Object.values(Status).includes(status)) {
            this.status = status;
        } else {
            throw new Error("Invalid task status");
        }
    }

    setTags(tags : TaskTag[]){
        this.tags = tags;
    }
}

