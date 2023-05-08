export interface ITask {
    id?: number;
    title: string;
    description: string;
    status: TaskStatus;
    history?: {
      value: string;
      timestamp: Date;
    }[];
    onSelect?: (task: ITask) => void
}

export type TaskStatus = "ToDo" | "InProgress" | "InQA" | "Done";

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (id: number, updates: Partial<ITask>) => void;
};

export interface AddTaskProps {
  task?: ITask;
  clearTask?: () => void
}