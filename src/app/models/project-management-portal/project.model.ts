import { Document } from "../workstation-portal/document.model";
import { Sprint } from "./sprint.model";

export class Project {
    private id: String;
    private name: String;
    private description: String;
    private sprints?: Sprint[];
    private documents?: Document[];

    constructor(id: String, name: String, description: String, sprints?: Sprint[], documents?: Document[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sprints = sprints ? sprints : null;
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

    public getSprints(){
        return this.sprints;
    }

    public getDocuments(){
        return this.documents;
    }

    public getDocumentsTreeRepresentation(){
        return {
            key: this.id,
            label: this.name,
            icon: "pi pi-fw pi-folder",
            children: [this.documents.map(document => document.getDocumentsTreeRepresentation()),this.sprints.map(sprint => sprint.getDocumentsTreeRepresentation())]
        }
    }
}
