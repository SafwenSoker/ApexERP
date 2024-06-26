import { Task } from "./task.model";

export class GroupOfTasks {
    id: number;
    projectId: number;
    name: string;
    demoDate: Date;
    startDate: Date;
    estimatedEndDate: Date;
    deliveredDate: Date;
    tasks : Task[];
    project?: any;
    constructor(id: number, name: string, demoDate: Date, startDate: Date, estimatedEndDate: Date, deliveredDate: Date, tasks: Task[], projectId?: number) {
        this.id = id;
        this.name = name;
        this.demoDate = demoDate;
        this.startDate = startDate;
        this.estimatedEndDate = estimatedEndDate;
        this.deliveredDate = deliveredDate;
        this.tasks = tasks;
        this.projectId = projectId;
    }

    public getId(){
        return this.id;
    }

    public getProjectId(){
        return this.projectId;
    }

    public getName(){
        return this.name;
    }

    public getDemoDate(){
        return this.demoDate;
    }

    public getStartDate(){
        return this.startDate;
    }

    public getEstimatedEndDate(){
        return this.estimatedEndDate;
    }

    public getDeliveredDate(){
        return this.deliveredDate;
    }

    public getTasks(){
        return this.tasks;
    }

}
