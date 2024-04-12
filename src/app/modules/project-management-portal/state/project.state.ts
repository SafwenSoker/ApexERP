import { GroupOfTasks } from "src/app/models/project-management-portal/group-of-tasks";
import { Project } from "src/app/models/project-management-portal/project.model"; 
import { Task } from "src/app/models/project-management-portal/task.model";


export interface ProjectsState {
    projects: Project[];
    groupsOfTasks: GroupOfTasks[];
    tasks: Task[];
}

export const initialState: ProjectsState= {
    projects: [],
    groupsOfTasks: [],
    tasks: []
};
