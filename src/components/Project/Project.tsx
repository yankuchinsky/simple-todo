import React, { useState, useEffect } from "react";
import { TaskWrapper } from "../TaskWrapper/TaskWrapper";
import ProjectName from "../ProjectName/ProjectName";
import { connect } from "react-redux";
import { Task } from "../../types/Project";
import "./Project.css";
import { editProject } from "../../actions/projectAction";
import { editTask, addTask } from "../../actions/taskAction";
import { TaskData } from "../../types/Project";
import { NewTask } from "../NewTask/NewTask";

import CircularProgress from "@material-ui/core/CircularProgress";

type Props = {
  id: number;
  name: string;
  tasks: Task[];
  editProject: Function;
  addTask: Function;
  editTask: Function;
};

const ProjectComponent: React.FC<Props> = props => {
  const { id, tasks, name, editProject, addTask, editTask } = props;
  const doneTasks: Task[] = [];
  const activeTasks: Task[] = [];

  const [isEditNameFormOpened, toggleEditNameForm] = useState(false);
  const [isNamePending, setNemaLoadingStatus] = useState(false);

  tasks.forEach(task =>
    task.isDone ? doneTasks.push(task) : activeTasks.push(task)
  );

  const editProjectName = (data: string) => {
    setNemaLoadingStatus(true);
    editProject({ id, name: data });
  };

  const updateTask = (task: Task) => {
    editTask({
      projectId: id,
      task
    });
  };

  const addNewTask = (task: Task) => {
    addTask({
      projectId: id,
      task
    });
  };

  useEffect(() => {
    if (toggleEditNameForm) {
      toggleEditNameForm(false);
      setNemaLoadingStatus(false);
    }
  }, [props.name]);

  return (
    <div className="project">
      <React.Fragment>
        {!isEditNameFormOpened ? (
          <div
            className="project-name"
            onClick={() => toggleEditNameForm(true)}
          >
            {name}
          </div>
        ) : (
          <React.Fragment>
            {isNamePending ? (
              <CircularProgress />
            ) : (
              <ProjectName name={name} updateNameCallback={editProjectName} />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
      <div className="project-tasks">
        <div className="project-tasks__column">
          <NewTask callback={addNewTask} />
          {activeTasks.map(task => (
            <TaskWrapper
              key={task.id}
              id={task.id}
              name={task.name}
              updateCallback={updateTask}
              isDone={task.isDone}
              isEditable={true}
            />
          ))}
        </div>
        <div className="project-tasks__column">
          {doneTasks.map(task => (
            <TaskWrapper
              key={task.id}
              id={task.id}
              name={task.name}
              isDone={task.isDone}
              updateCallback={updateTask}
              isEditable={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default connect(
  null,
  { editProject, addTask, editTask }
)(ProjectComponent);
