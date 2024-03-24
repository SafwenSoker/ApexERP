import { Task } from "./task.model";

export class GroupOfTasks {
    private id: Number;
    private projectId: Number;
    private name: String;
    private demoDate: Date;
    private startDate: Date;
    private estimatedEndDate: Date;
    private deliveredDate: Date;
    private tasks : Task[];

    constructor(name: String, demoDate: Date, startDate: Date, estimatedEndDate: Date, deliveredDate: Date, tasks: Task[]) {
        this.name = name;
        this.demoDate = demoDate;
        this.startDate = startDate;
        this.estimatedEndDate = estimatedEndDate;
        this.deliveredDate = deliveredDate;
        this.tasks = tasks;
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
