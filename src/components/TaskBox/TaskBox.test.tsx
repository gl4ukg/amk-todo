import { render, screen, fireEvent } from "@testing-library/react";
import TaskBox from "./TaskBox.component";
import { ITask } from "../../types/Task.types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

describe("TaskBox", () => {
  library.add(faPenToSquare);
  const mockTask: ITask = {
    id: 1,
    title: "Test task",
    description: "This is a test task",
    status: "ToDo",
    onSelect: jest.fn(),
  };

  it("renders the task title and description", () => {
    render(<TaskBox {...mockTask} />);
    expect(screen.getByText(mockTask.title)).toBeInTheDocument();
    expect(screen.getByText(mockTask.description)).toBeInTheDocument();
  });

  it("calls onSelect when the task box is clicked", () => {
    render(<TaskBox {...mockTask} />);
    fireEvent.click(screen.getByTestId("task-box"));
    expect(mockTask.onSelect).toHaveBeenCalledWith(mockTask);
  });
});
