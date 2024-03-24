import { Project } from "src/app/models/project-management-portal/project.model"; 


export interface ProjectsState {
    projects: Project[];
}

export const initialState: ProjectsState= {
    projects: []
};
