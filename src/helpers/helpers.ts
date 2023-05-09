import { TaskStatus } from "../types/Task.types";

export const trimTextAfterMaxChars = (text: string, maxChars: number) => {
    if (text.length > maxChars) {
      return text.substring(0, maxChars) + '...';
    }
    return text;
  }
  
export const getValidStatuses = (prevStatus: TaskStatus): TaskStatus[] => {
    switch (prevStatus) {
      case "ToDo":
        return ["ToDo", "InProgress"];
      case "InProgress":
        return ["ToDo", "InProgress", "InQA", "Done"];
      case "InQA":
        return ["InQA", "InProgress"];
      case "Done":
        return ["Done"];
      default:
        return [];
    }
  };