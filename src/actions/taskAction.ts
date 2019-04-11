import { NEW_TASK, EDIT_TASK } from "./types";
import { fakeFetch } from "../fakeFetch";
import { Dispatch } from "redux";
import { TaskData } from "../types/Project";

export const addTask = (data: TaskData) => async (dispatch: Dispatch) => {
  try {
    await fakeFetch();
    dispatch({
      type: NEW_TASK,
      payload: data
    });
  } catch (e) {}
};

export const editTask = (data: TaskData) => async (dispatch: Dispatch) => {
  try {
    await fakeFetch();
    dispatch({
      type: EDIT_TASK,
      payload: data
    });
  } catch (e) {}
};
