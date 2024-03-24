import {createAction, props} from '@ngrx/store';
import { Project } from 'src/app/models/project-management-portal/project.model';

export const ADD_PROJECT_ACTION = '[projects page] add project';
export const ADD_PROJECT_SUCCESS = '[projects page] add project success';
export const UPDATE_PROJECT_ACTION = '[projects page] update project';
export const UPDATE_PROJECT_SUCCESS = '[projects page] update project success';
export const DELETE_PROJECT_ACTION = '[projects page] delete project';
export const DELETE_PROJECT_SUCCESS = '[projects page] delete project success';
export const GET_PROJECT_ACTION = '[projects page] get project';
export const GET_PROJECT_SUCCESS = '[projects page] get project success';
export const LOAD_PROJECTS = '[projects page] load projects';
export const LOAD_PROJECTS_SUCCESS = '[projects page] load projects success';


export const createProject = createAction(ADD_PROJECT_ACTION,props<{newProject: FormData}>());
export const createProjectSuccess = createAction(ADD_PROJECT_SUCCESS,props<{project: Project}>());
export const updateProject = createAction(UPDATE_PROJECT_ACTION, props<{updatedProject: Project}>())
export const updateProjectSuccess = createAction(UPDATE_PROJECT_SUCCESS, props<{project: Project}>())
export const deleteProject = createAction(DELETE_PROJECT_ACTION, props<{projectId: string}>())
export const deleteProjectSuccess = createAction(DELETE_PROJECT_SUCCESS, props<{project: Project}>())
export const getProject = createAction(GET_PROJECT_ACTION, props<{createdBy: string, projectName: string}>())
export const getProjectSuccess = createAction(GET_PROJECT_SUCCESS, props<{project: Project}>())
export const loadProjects = createAction(LOAD_PROJECTS);
export const loadProjectsSuccess = createAction(LOAD_PROJECTS_SUCCESS, props<{projects: Project[]}>());
