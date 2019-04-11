import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { editTask } from "../../actions/taskAction";
import Task from "../Task/Task";
import { TaskForm } from "../TaskForm/TaskForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./TaskWrapper.css";
import { Task as TaskType } from "../../types/Project";

type Props = {
  id: number;
  name: string;
  isDone: boolean;
  updateCallback: Function;
  isEditable: Boolean;
};

type updateTaskData = {
  id: number;
  name: string;
  isDone?: boolean;
};

export const TaskWrapper: React.FC<Props> = props => {
  const { id, name, isDone, updateCallback, isEditable } = props;

  const [isEditing, setEditingStatus] = useState(false);
  const [isDataPending, setDataPendingStatus] = useState(false);

  useEffect(() => {
    setDataPendingStatus(false);
    setEditingStatus(false);
  }, [props.name]);

  const updateTask = (data: TaskType) => {
    setDataPendingStatus(true);
    const done = typeof data.isDone === "boolean" ? data.isDone : isDone;
    updateCallback({
      id,
      name: data.name,
      isDone: done
    });
  };

  const switchToForm = () => (isEditable ? setEditingStatus(true) : null);

  return (
    <div className="task-wrapper">
      {isDataPending ? (
        <CircularProgress />
      ) : isEditing ? (
        <TaskForm id={id} name={name} callback={updateTask} />
      ) : (
        <Task
          id={id}
          name={name}
          isDone={isDone}
          editTaskCallback={switchToForm}
          toggleStatusCallback={updateTask}
        />
      )}
    </div>
  );
};
