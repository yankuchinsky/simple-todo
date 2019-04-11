import {
  FETCH_PROJECTS,
  NEW_TASK,
  EDIT_TASK,
  ADD_PROJECT,
  EDIT_PROJECT
} from "../actions/types";
import { Project } from "../types/Project";
import { ProjectState } from "../types/State";

type ActionType = {
  type: string;
  payload: any;
};

const InitialState: ProjectState = {
  projects: []
};

export default function(
  state: ProjectState = InitialState,
  action: ActionType
) {
  let projects: Project[];
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case ADD_PROJECT: {
      return {
        ...state,
        projects: state.projects
      };
    }
    case EDIT_PROJECT: {
      const project = state.projects[action.payload.id];
      project.projectName = action.payload.name;
      projects = JSON.parse(JSON.stringify(state.projects));
      return {
        ...state,
        projects
      };
    }
    case NEW_TASK: {
      const projectId = action.payload.projectId;
      const newItem = action.payload.task;
      newItem.id = state.projects[action.payload.projectId].tasks.length;
      state.projects[projectId].tasks.push(action.payload.task);
      projects = JSON.parse(JSON.stringify(state.projects));
      return {
        ...state,
        projects
      };
    }
    case EDIT_TASK: {
      const projectId = action.payload.projectId;
      const taskId = action.payload.task.id;
      const item = state.projects[projectId].tasks[taskId];
      item.isDone = action.payload.task.isDone;
      item.name = action.payload.task.name;
      projects = JSON.parse(JSON.stringify(state.projects));
      return {
        ...state,
        projects
      };
    }
    default:
      return {
        ...state,
        projects: state
      };
  }
}
