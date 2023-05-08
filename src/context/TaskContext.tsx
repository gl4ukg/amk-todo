import React, { createContext, useContext, useState } from "react";
import { ITaskContext, ITask } from "../types/Task.types";


const TaskContext = createContext<ITaskContext | undefined>(undefined);

export const useTask = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error("useTask must be used within a TaskProvider");
  }
  return context;
};

const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<ITask[]>([
  ]);

  const addTask = (task: ITask) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id: number, updates: Partial<ITask>) => {
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
            history: [...(task.history ?? []), historyEntry],
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
