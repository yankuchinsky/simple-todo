import { combineReducers } from "redux";
import projectReducer from "./projectReducer";

type projectReducerType = {
  state: any;
  action: any;
};

export default combineReducers({
  projectReducer
});
