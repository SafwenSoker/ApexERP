import { Document } from "../workstation-portal/document.model";
import { Task } from "./task.model";

export class Sprint {
    id: number;
    number: String;
    startDate: Date;
    endDate: Date;
    status: String;
    projectId: String;
    tasks: Task[];
    documents?: Document[];
    
    constructor(id: number, number: string, startDate: Date, endDate: Date, status: string, projectId: String, tasks: Task[], documents: Document[]) {
        this.id = id;
        this.number = number;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
        this.projectId = projectId;
        this.tasks = tasks;
    }

    getId(){
        return this.id;
    }

    getNumber(){
        return this.number;
    }

    getStartDate(){
        return this.startDate;
    }

    getEndDate(){
        return this.endDate;
    }

    getStatus(){
        return this.status;
    }

    getTasks(){
        return this.tasks;
    }
    
    getDocumentsTreeRepresentation(){
        return {
            key: this.projectId+"-"+this.id,
            label: this.id,
            icon: "pi pi-fw pi-sync",
            children: this.documents.map((document) => {
                return document.getDocumentsTreeRepresentation();
            })
        }
    }
}
