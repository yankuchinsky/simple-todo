import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import "./TaskForm.css";

type Props = {
  callback: Function;
  id?: number;
  name?: string;
};

export const TaskForm: React.FC<Props> = props => {
  const { callback, id } = props;
  const [name, setName] = useState(typeof id !== undefined ? props.name : "");

  const handleName = (event: any) => setName(event.target.value);

  const createTask = () => {
    if (typeof id !== undefined) {
      callback({
        id,
        name,
        isDone: false
      });
    } else {
      callback({ name });
    }
    setName("");
  };

  return (
    <Paper className="task-form">
      <Input
        className="task-form__input"
        type="text"
        onChange={handleName}
        value={name}
      />
      <Button onClick={createTask}>
        {props.id === undefined ? "Create" : "Update"}
      </Button>
    </Paper>
  );
};
