import { render, fireEvent, screen } from '@testing-library/react';
import { ITask, TaskStatus } from '../../types/Task.types';
import { useTask } from '../../context/TaskContext';
import TaskForm from './TaskForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

jest.mock('../../context/TaskContext');

describe('TaskForm', () => {
  library.add(
    faPenToSquare,
    faPlus
  );
  let addTaskMock: jest.Mock;
  let updateTaskMock: jest.Mock;
  let clearTaskMock: jest.Mock;
  let mockTask = {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    status: 'ToDo' as TaskStatus
  }

  beforeEach(() => {
    addTaskMock = jest.fn();
    updateTaskMock = jest.fn();
    clearTaskMock = jest.fn();
    (useTask as jest.Mock).mockReturnValue({ addTask: addTaskMock, updateTask: updateTaskMock });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render the component with the correct fields', () => {
    render(<TaskForm task={mockTask} clearTask={clearTaskMock} />);

    const titleInput = screen.getByLabelText('Title:');
    const descriptionInput = screen.getByLabelText('Description:');
    const statusSelect = screen.getByLabelText('Status:');
    const addButton = screen.getByText('Update');
    const cancelButton = screen.getByText('Cancel');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(statusSelect).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();

    expect(titleInput).toHaveValue(mockTask.title);
    expect(descriptionInput).toHaveValue(mockTask.description);
    expect(statusSelect).toHaveValue(mockTask.status);
  });

  test('should render the component with the correct fields when creating a new task', () => {
    render(<TaskForm task={undefined} clearTask={() => {}} />);
    
    const titleInput = screen.getByLabelText('Title:');
    const descriptionInput = screen.getByLabelText('Description:');
    const addButton = screen.getByText('Add');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  test('should render the component with the correct fields when editing an existing task', () => {
    const task = {
      id: 1,
      title: 'Test Task',
      description: 'This is a test task',
      status: 'ToDo',
    };
    render(<TaskForm task={task as ITask} clearTask={() => {}} />);
    
    const titleInput = screen.getByLabelText('Title:');
    const descriptionInput = screen.getByLabelText('Description:');
    const statusSelect = screen.getByLabelText('Status:');
    const updateButton = screen.getByText('Update');
    const cancelButton = screen.getByText('Cancel');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(statusSelect).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it('should update the title when the title input is changed', () => {
    render(<TaskForm task={mockTask} clearTask={clearTaskMock} />);

    const titleInput = screen.getByLabelText('Title:');

    fireEvent.change(titleInput, { target: { value: 'New Task Title' } });

    expect(titleInput).toHaveValue('New Task Title');
  });

  it('should update the description when the description input is changed', () => {
    render(<TaskForm task={mockTask} clearTask={clearTaskMock} />);

    const descriptionInput = screen.getByLabelText('Description:');

    fireEvent.change(descriptionInput, { target: { value: 'New Task Description' } });

    expect(descriptionInput).toHaveValue('New Task Description');
  });
}); 