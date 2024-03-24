import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectsState } from './project.state';
export const PROJECT_STATE_NAME = 'projects';

const getProjectsState =
    createFeatureSelector<ProjectsState>(PROJECT_STATE_NAME);

export const getProjects = createSelector(getProjectsState, (state) => {
    return state.projects;
});


export const getProject = (projectName: string) =>
    createSelector(getProjectsState, (state) => {
        const project = state.projects.find((project) => project.getName() === projectName);
        return project;
    });

export const getGroupOfTasks = (projectName: string, groupOfTasksName: string) => createSelector(getProjectsState, (state) => {
    let project = state.projects.find((project) => project.getName() === projectName);
    let groupOfTasks = project.getGroupsOfTasks().find((groupOfTasks) => groupOfTasks.getName() === groupOfTasksName);
    return groupOfTasks;
});

export const getTask = (projectName: string, groupOfTasksName: string, taskName: string) => createSelector(getProjectsState, (state) => {
    let project = state.projects.find((project) => project.getName() === projectName);
    let groupOfTasks = project.getGroupsOfTasks().find((groupOfTasks) => groupOfTasks.getName() === groupOfTasksName);
    let task = groupOfTasks.getTasks().find((task) => task.getName() === taskName);
    return task;
});

