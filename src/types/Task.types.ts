export interface Task {
    id?: number;
    title: string;
    description: string;
    status: 'ToDo' | 'InProgress' | 'InQA' | 'Done';
    history?: {
      value: string;
      timestamp: Date;
    }[];
}