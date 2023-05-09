import React, { createContext, useContext, useState } from "react";
import { ITaskContext, ITask } from "../types/Task.types";
import { getValidStatuses } from "../helpers/helpers";


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
  const [nextId, setNextId] = useState<number>(1); 

  const addTask = (task: ITask) => {
    const newTask: ITask = {
      ...task,
      id: tasks.length,
      status: "ToDo", 
    }
    setTasks([...tasks, newTask]);
    setNextId(nextId + 1);
    setTasks([...tasks ?? [], newTask]);
  };
  
  const updateTask = (id: number, updates: Partial<ITask>) => {
    setTasks(prevTasks =>
      prevTasks.map(task => {
          if (task.id !== id) {
            return task;
          }

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
            history: [...(task.history ?? []), historyEntry],
          };
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
