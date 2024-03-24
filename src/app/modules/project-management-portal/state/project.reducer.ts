import { createReducer, on } from '@ngrx/store';
import { addProjectSuccess, deleteProjectSuccess, getProjectSuccess, loadProjectsSuccess, updateProjectSuccess, } from './project.actions';
import { initialState, ProjectsState } from './project.state';
import { Project } from 'src/app/models/project-management-portal/project.model';
const _projectsReducer = createReducer(
  initialState,
  on(addProjectSuccess, (state, action) => {
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
  })
);

export function projectsReducer(state: ProjectsState, action: any) {
  return _projectsReducer(state, action);
}
