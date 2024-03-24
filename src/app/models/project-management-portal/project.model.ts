import { Document } from "../workstation-portal/document.model";
import { GroupOfTasks } from "./group-of-tasks";

export class Project {
    private id?: Number;
    private name: String;
    private description: String;
    private groupsOfTasks?: GroupOfTasks[];
    private documents?: Document[];
    private status?: String;


    constructor(id: Number, name: String, description: String, groupsOfTasks?: GroupOfTasks[], documents?: Document[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.groupsOfTasks = groupsOfTasks ? groupsOfTasks : null;
        this.documents = documents ? documents : null;
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

    public setStatus(status: String){
        this.status = status;
    }
}
