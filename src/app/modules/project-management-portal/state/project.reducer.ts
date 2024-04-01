import { createReducer, on } from '@ngrx/store';
import { createGroupOfTasksSuccess, createProjectSuccess, createTaskSuccess, deleteGroupOfTasksSuccess, deleteProjectSuccess, deleteTaskSuccess, getGroupOfTasksSuccess, getProjectSuccess, getTaskSuccess, loadGroupsOfTasksSuccess, loadProjectsSuccess, loadTasksSuccess, updateGroupOfTasksSuccess, updateProjectSuccess, updateTaskSuccess, } from './project.actions';
import { initialState, ProjectsState } from './project.state';
import { Project } from 'src/app/models/project-management-portal/project.model';
import { GroupOfTasks } from 'src/app/models/project-management-portal/group-of-tasks';
const _projectsReducer = createReducer(
  initialState,
  on(createProjectSuccess, (state, action) => {
    return {
      ...state,
      projects: [action.project,...state.projects],
    };
  }),
  on(updateProjectSuccess, (state, action) => {
    const updatedProjects = state.projects.map(project => {
      return (action.project.getId() === project.getId())? action.project : project;
    });
    return {
      ...state,
      projects: updatedProjects
    };
  }),
  on(deleteProjectSuccess, (state, action) => {
    const updatedProjects = state.projects.filter(project => {return project.getName() !== action.project.getName();});
    return {
      ...state,
      projects: updatedProjects,
    };
  }),
  on(loadProjectsSuccess, (state, action) => {
    return {
      ...state,
      projects: action.projects
    }
  }),
  on(getProjectSuccess, (state, action) => {
    const project = action.project;
    return {    
      ...state,    
      projects: [...state.projects,project]
    }
  }),
  
  on(createGroupOfTasksSuccess, (state, action) => {
    return {
      ...state,
      groupsOfTasks: [action.groupOfTasks,...state.groupsOfTasks],
    };
  }),
  on(updateGroupOfTasksSuccess, (state, action) => {
    const updatedGroupsOfTasks = state.groupsOfTasks.map(groupOfTasks => {
      return (action.groupOfTasks.getId() === groupOfTasks.getId())? action.groupOfTasks : groupOfTasks;
    });
    return {
      ...state,
      groupsOfTasks: updatedGroupsOfTasks
    };
  }),
  on(deleteGroupOfTasksSuccess, (state, action) => {
    const updatedGroupsOfTasks = state.groupsOfTasks.filter(groupOfTasks => {return groupOfTasks.getName() !== action.groupOfTasks.getName();});
    return {
      ...state,
      groupsOfTasks: updatedGroupsOfTasks,
    };
  }),
  on(loadGroupsOfTasksSuccess, (state, action) => {
    return {
      ...state,
      groupsOfTasks: action.groupsOfTasks
    }
  }),
  on(getGroupOfTasksSuccess, (state, action) => {
    const groupOfTasks = action.groupOfTasks;
    return {    
      ...state,    
      groupsOfTasks: [...state.groupsOfTasks,groupOfTasks]
    }
  }),

  on(createTaskSuccess, (state, action) => {
    return {
      ...state,
      tasks: [action.task,...state.tasks],
    };
  }),
  on(updateTaskSuccess, (state, action) => {
    const updatedTasks = state.tasks.map(task => {
      return (action.task.getId() === task.getId())? action.task : task;
    });
    return {
      ...state,
      tasks: updatedTasks
    };
  }),
  on(deleteTaskSuccess, (state, action) => {
    const updatedTasks = state.tasks.filter(task => {return task.getName() !== action.task.getName();});
    return {
      ...state,
      tasks: updatedTasks,
    };
  }),
  on(loadTasksSuccess, (state, action) => {
    return {
      ...state,
      tasks: action.tasks
    }
  }),
  on(getTaskSuccess, (state, action) => {
    const task = action.task;
    return {    
      ...state,    
      tasks: [...state.tasks,task]
    }
  })
);

export function projectsReducer(state: ProjectsState, action: any) {
  return _projectsReducer(state, action);
}
