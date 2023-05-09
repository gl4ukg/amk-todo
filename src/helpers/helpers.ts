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