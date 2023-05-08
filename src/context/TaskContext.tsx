import React, { createContext, useContext, useState } from "react";

type Task = {
  id: number;
  title: string;
  description: string;
  status: "ToDo" | "InProgress" | "InQA" | "Done";
  history: { value: string; timestamp: Date }[];
};

type TaskContextType = {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (id: number, updates: Partial<Task>) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: number, updates: Partial<Task>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const historyEntry = {
            value: `${task.status} -> ${updates.status}`,
            timestamp: new Date(),
          };
          return {
            ...task,
            ...updates,
            history: [...task.history, historyEntry],
          };
        }
        return task;
      })
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
