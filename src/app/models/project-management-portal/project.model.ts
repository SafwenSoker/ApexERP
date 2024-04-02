import { Document } from "../workstation-portal/document.model";
import { GroupOfTasks } from "./group-of-tasks";

export class Project {
    private id?: number;
    private name: string;
    private description: string;
    private groupsOfTasks?: GroupOfTasks[];
    private documents?: Document[];
    private status?: string;
    private color?:string;


    constructor(id: number, name: string, description: string, groupsOfTasks?: GroupOfTasks[], documents?: Document[], color?: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.groupsOfTasks = groupsOfTasks ? groupsOfTasks : null;
        this.documents = documents ? documents : null;
        this.color = color;

    }

    public getId(){
        return this.id;
    }

    public getName(){
        return this.name;
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
            label: this.name,
            icon: "pi pi-fw pi-folder",
            // children: [this.documents.map(document => document.getDocumentsTreeRepresentation()),this.groupsOfTasks.map(groupOfTasks => groupOfTasks.getDocumentsTreeRepresentation())]
        }
    }

    public getStatus(){
        return this.status;
    }

    public setStatus(status: string){
        this.status = status;
    }

    
    getColor() {
        return this.color;
    }
}
