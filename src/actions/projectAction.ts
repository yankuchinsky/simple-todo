import { Project } from "../types/Project";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { fakeFetch } from "../fakeFetch";
import { FETCH_PROJECTS, EDIT_PROJECT } from "./types";

const initialTasks: Project[] = [
  {
    projectId: 0,
    projectName: "project1",
    tasks: [
      {
        id: 0,
        name: "task1",
        isDone: false
      }
    ]
  },
  {
    projectId: 1,
    projectName: "project1",
    tasks: [
      {
        id: 0,
        name: "task1",
        isDone: false
      }
    ]
  }
];

export const fetchProjects = (): ThunkAction<
  void,
  any,
  null,
  Action<string>
> => async dispatch => {
  try {
    await fakeFetch();
    dispatch({
      type: FETCH_PROJECTS,
      payload: initialTasks
    });
  } catch (e) {}
};

export const editProject = (data: any) => async (dispatch: any) => {
  try {
    await fakeFetch();
    dispatch({
      type: EDIT_PROJECT,
      payload: data
    });
  } catch (e) {}
};
