export type Task = {
  id: number;
  name: string;
  isDone: boolean;
};

export type TaskData = {
  projectId: number;
  task: Task;
};

export type Project = {
  projectId: number;
  projectName: string;
  tasks: Task[];
};
