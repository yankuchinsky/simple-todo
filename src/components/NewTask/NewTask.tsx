import React, { useState } from "react";
import { TaskForm } from "../TaskForm/TaskForm";
import { Task } from "../../types/Project";
import Fab from "@material-ui/core/Fab";

type Props = {
  callback: Function;
};

export const NewTask: React.FC<Props> = props => {
  const { callback } = props;
  const [isFormOpened, toggleForm] = useState(false);

  const taskFormCallback = (task: Task) => {
    callback(task);
    toggleForm(false);
  };

  return (
    <React.Fragment>
      {isFormOpened ? (
        <TaskForm callback={taskFormCallback} />
      ) : (
        <Fab color="primary" onClick={() => toggleForm(true)}>
          +
        </Fab>
      )}
    </React.Fragment>
  );
};
