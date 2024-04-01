import {createAction, props} from '@ngrx/store';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { Task } from 'src/app/models/project-management-portal/task.model';

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

export const ADD_GROUP_OF_TASKS_ACTION = '[projects page] add group of tasks';
export const ADD_GROUP_OF_TASKS_SUCCESS = '[projects page] add group of tasks success';
export const UPDATE_GROUP_OF_TASK_ACTION = '[projects page] update group of tasks';
export const UPDATE_GROUP_OF_TASK_SUCCESS = '[projects page] update group of tasks success';
export const DELETE_GROUP_OF_TASK_ACTION = '[projects page] delete group of tasks';
export const DELETE_GROUP_OF_TASK_SUCCESS = '[projects page] delete group of tasks success';
export const GET_GROUP_OF_TASK_ACTION = '[projects page] get group of tasks';
export const GET_GROUP_OF_TASK_SUCCESS = '[projects page] get group of tasks success';
export const LOAD_GROUP_OF_TASKS = '[projects page] load  groups of tasks';
export const LOAD_GROUP_OF_TASKS_SUCCESS = '[projects page] load groups of tasks success';

export const ADD_TASK_ACTION = '[projects page] add task';
export const ADD_TASK_SUCCESS = '[projects page] add task success';
export const UPDATE_TASK_ACTION = '[projects page] update task';
export const UPDATE_TASK_SUCCESS = '[projects page] update task success';
export const DELETE_TASK_ACTION = '[projects page] delete task';
export const DELETE_TASK_SUCCESS = '[projects page] delete task success';
export const GET_TASK_ACTION = '[projects page] get task';
export const GET_TASK_SUCCESS = '[projects page] get task success';
export const LOAD_TASKS = '[projects page] load tasks';
export const LOAD_TASKS_SUCCESS = '[projects page] load tasks success';


export const createProject = createAction(ADD_PROJECT_ACTION,props<{newProject: FormData}>());
export const createProjectSuccess = createAction(ADD_PROJECT_SUCCESS,props<{project: Project}>());
export const updateProject = createAction(UPDATE_PROJECT_ACTION, props<{updatedProject: Project}>())
export const updateProjectSuccess = createAction(UPDATE_PROJECT_SUCCESS, props<{project: Project}>())
export const deleteProject = createAction(DELETE_PROJECT_ACTION, props<{projectId: number}>())
export const deleteProjectSuccess = createAction(DELETE_PROJECT_SUCCESS, props<{project: Project}>())
export const getProject = createAction(GET_PROJECT_ACTION, props<{projectId: number}>())
export const getProjectSuccess = createAction(GET_PROJECT_SUCCESS, props<{project: Project}>())
export const loadProjects = createAction(LOAD_PROJECTS);
export const loadProjectsSuccess = createAction(LOAD_PROJECTS_SUCCESS, props<{projects: Project[]}>());


export const createGroupOfTasks = createAction(ADD_GROUP_OF_TASKS_ACTION,props<{newGroupOfTasks: FormData}>());
export const createGroupOfTasksSuccess = createAction(ADD_GROUP_OF_TASKS_SUCCESS,props<{groupOfTasks: GroupOfTasks}>());
export const updateGroupOfTasks = createAction(UPDATE_GROUP_OF_TASK_ACTION, props<{updatedGroupOfTasks: GroupOfTasks}>())
export const updateGroupOfTasksSuccess = createAction(UPDATE_GROUP_OF_TASK_SUCCESS, props<{groupOfTasks: GroupOfTasks}>())
export const deleteGroupOfTasks = createAction(DELETE_GROUP_OF_TASK_ACTION, props<{groupOfTasksId: number}>())
export const deleteGroupOfTasksSuccess = createAction(DELETE_GROUP_OF_TASK_SUCCESS, props<{groupOfTasks: GroupOfTasks}>())
export const getGroupOfTasks = createAction(GET_GROUP_OF_TASK_ACTION, props<{groupOfTasksId: number}>())
export const getGroupOfTasksSuccess = createAction(GET_GROUP_OF_TASK_SUCCESS, props<{groupOfTasks: GroupOfTasks}>())
export const loadGroupsOfTasks = createAction(LOAD_GROUP_OF_TASKS, props<{projectId: number}>());
export const loadGroupsOfTasksSuccess = createAction(LOAD_GROUP_OF_TASKS_SUCCESS, props<{groupsOfTasks: GroupOfTasks[]}>());


export const createTask = createAction(ADD_TASK_ACTION,props<{newTask: FormData}>());
export const createTaskSuccess = createAction(ADD_TASK_SUCCESS,props<{task: Task}>());
export const updateTask = createAction(UPDATE_TASK_ACTION, props<{updatedTask: Task}>())
export const updateTaskSuccess = createAction(UPDATE_TASK_SUCCESS, props<{task: Task}>())
export const deleteTask = createAction(DELETE_TASK_ACTION, props<{taskId: number}>())
export const deleteTaskSuccess = createAction(DELETE_TASK_SUCCESS, props<{task: Task}>())
export const getTask = createAction(GET_TASK_ACTION, props<{taskId: number}>())
export const getTaskSuccess = createAction(GET_TASK_SUCCESS, props<{task: Task}>())
export const loadTasks = createAction(LOAD_TASKS, props<{groupOfTasksId: number}>());
export const loadTasksSuccess = createAction(LOAD_TASKS_SUCCESS, props<{tasks: Task[]}>());
