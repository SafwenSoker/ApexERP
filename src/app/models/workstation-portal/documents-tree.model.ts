import { Project } from "../project-management-portal/project.model";

export class DocumentsTree {
    private projects: Project[]

    constructor(projects: Project[]) {
        this.projects = projects;
    }

    public getDocumentsTreeRepresentation(){
        let documentsTreeRepresentation = []
        for(const project of this.projects){
            documentsTreeRepresentation.push(project.getDocumentsTreeRepresentation())
        }
    }
}
