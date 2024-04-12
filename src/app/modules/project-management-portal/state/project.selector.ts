import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './project.state';
export const PROJECT_STATE_NAME = 'projects';

const getProjectsState =
    createFeatureSelector<ProjectsState>(PROJECT_STATE_NAME);

export const getProjects = createSelector(getProjectsState, (state) => {
    return state.projects;
});

export const getGroupsOfTasks = (projectId: number) =>
    createSelector(getProjectsState, (state) => {
        console.log("Groups of tasks: ",state.groupsOfTasks)
        const groupsOfTasks = state.groupsOfTasks.filter((groupOfTasks) => groupOfTasks.project.id === projectId);
        return groupsOfTasks;
    });

export const getTasks = (groupOfTasksId: number) =>
    createSelector(getProjectsState, (state) => {
        const tasks = state.tasks.filter((task) => task.getGroupOfTasksId() === groupOfTasksId);
        return tasks;
    });


export const getProjectById = (projectId: number) =>
    createSelector(getProjectsState, (state) => {
        const project = state.projects.find((project) => project.id === projectId);
        return project;
    });

    
export const getProjectByName = (projectName: string) =>
createSelector(getProjectsState, (state) => {
    const project = state.projects.find((project) => project.title === projectName);
    console.log(project)
    return project;
});

export const getGroupOfTasks = (groupOfTasksId: number) => createSelector(getProjectsState, (state) => {
    let groupOfTasks = state.groupsOfTasks.find((groupOfTasks) => groupOfTasks.getId() === groupOfTasksId);
    return groupOfTasks;
});



export const getTask = (taskId: number) => createSelector(getProjectsState, (state) => {
    let task = state.tasks.find((task) => task.getId() === taskId);
    return task;
});

