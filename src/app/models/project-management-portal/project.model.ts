import { Employee } from "../user-management-portal/employee.model";
import { Document } from "../workstation-portal/document.model";
import { GroupOfTasks } from "./group-of-tasks";
import { Status } from "./status.model";

export class Project {
    id?: number;
    title: string;
    description: string;
    groupsOfTasks?: GroupOfTasks[];
    documents?: Document[];
    developers: Employee[];
    status?: Status;
    color?:string;
    


    constructor(id: number, title: string, description: string, groupsOfTasks?: GroupOfTasks[], documents?: Document[], color?: string, developers?: Employee[]) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.groupsOfTasks = groupsOfTasks ? groupsOfTasks : null;
        this.documents = documents ? documents : null;
        this.color = color;
        this.developers = developers;
    }

    public getId(){
        return this.id;
    }

    public getTile(){
        return this.title;
    }

    public getDescription(){
        return this.description;
    }

    public getGroupsOfTasks(){
        return this.groupsOfTasks;
    }

    public getDocuments(){
        return this.documents;
    }

    public getDocumentsTreeRepresentation(){
        return {
            key: this.id,
            label: this.title,
            icon: "pi pi-fw pi-folder",
            // children: [this.documents.map(document => document.getDocumentsTreeRepresentation()),this.groupsOfTasks.map(groupOfTasks => groupOfTasks.getDocumentsTreeRepresentation())]
        }
    }

    public getStatus(){
        return this.status;
    }

    public setStatus(status: Status){
        this.status = status;
    }

    
    getColor() {
        return this.color;
    }
}
