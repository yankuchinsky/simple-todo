import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import CheckBox from "@material-ui/core/Checkbox/Checkbox";
import "./Task.css";

type Props = {
  id: number;
  name: string;
  isDone: boolean;
  toggleStatusCallback: Function;
  editTaskCallback?: Function;
};

const Todo: React.FC<Props> = props => {
  const { id, name, isDone, toggleStatusCallback, editTaskCallback } = props;

  const editTask = () => {
    toggleStatusCallback({
      id,
      name,
      isDone: !isDone
    });
  };

  const editName = () => {
    if (editTaskCallback) {
      editTaskCallback(id);
    }
  };

  return (
    <Paper className="task">
      <div className="task-name" onClick={editName}>
        {name}
      </div>
      <CheckBox className={"status"} onClick={editTask} checked={isDone} />
    </Paper>
  );
};

export default Todo;
