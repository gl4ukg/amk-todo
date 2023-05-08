export interface ITask {
    id?: number;
    title: string;
    description: string;
    status: 'Todo' | 'InProgress' | 'InQA' | 'Done';
    history?: {
      value: string;
      timestamp: Date;
    }[];
}

export interface ITaskContext {
  tasks: ITask[];
  addTask: (task: ITask) => void;
  updateTask: (id: number, updates: Partial<ITask>) => void;
};