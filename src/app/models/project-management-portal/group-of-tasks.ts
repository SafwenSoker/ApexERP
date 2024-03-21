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

    constructor(demoDate: Date, startDate: Date, estimatedEndDate: Date, deliveredDate: Date, tasks: Task[]) {
        this.demoDate = demoDate;
        this.startDate = startDate;
        this.estimatedEndDate = estimatedEndDate;
        this.deliveredDate = deliveredDate;
        this.tasks = tasks;
    }

}
