import React, { createContext, useContext, useState } from "react";
import { ITaskContext, ITask, TaskStatus } from "../types/Task.types";


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
    const newTask: ITask = {
      ...task,
      id: tasks.length,
      status: "ToDo", 
    }
    setTasks([...tasks ?? [], newTask]);
  };

  const getValidStatuses = (prevStatus: TaskStatus): TaskStatus[] => {
    switch (prevStatus) {
      case "ToDo":
        return ["InProgress"];
      case "InProgress":
        return ["InQA", "Done"];
      case "InQA":
        return ["ToDo", "Done"];
      case "Done":
        return [];
      default:
        return [];
    }
  };
  
  const updateTask = (id: number, updates: Partial<ITask>) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          const { status: prevStatus } = task;
          const { status: newStatus } = updates;
          const validStatuses = getValidStatuses(prevStatus);
  
          if (newStatus && !validStatuses.includes(newStatus)) {
            alert(`Invalid status transition from ${prevStatus} to ${newStatus}`);
            return task;
          }
  
          const historyEntry = {
            value: `${prevStatus} -> ${newStatus}`,
            timestamp: new Date(),
          };
  
          return {
            ...task,
            ...updates,
            history: [...task.history ?? [], historyEntry],
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
