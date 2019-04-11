import { Project } from "./Project";

export type State = {
  projectReducer: ProjectState;
};

export type ProjectState = {
  projects: Project[];
};
