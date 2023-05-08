import { useState, useEffect } from 'react';
import { useTask } from '../../context/TaskContext';
import { AddTaskProps, TaskStatus } from '../../types/Task.types';
import styles from "./AddTask.module.scss"
import Button from '../Button/Button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const AddTask = ({ task, clearTask }: AddTaskProps) => {
    const { addTask, updateTask } = useTask();
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [status, setStatus] = useState<TaskStatus>(task?.status || 'ToDo');

    useEffect(() => {
        setTitle(task?.title || '');
        setDescription(task?.description || '');
        setStatus(task?.status || 'ToDo');
    }, [task]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === '') return
        if (task) {
            updateTask(task?.id ?? 0, { title, description, status });
        } else {
            addTask({ title, description, status });
        }
        setTitle('')
        setDescription('')
        setStatus('ToDo')
    };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            {task?.title && <label>
                Status:
                <select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                <option value="ToDo">ToDo</option>
                <option value="InProgress">InProgress</option>
                <option value="InQA">InQA</option>
                <option value="Done">Done</option>
                </select>
            </label>}
            <div className={styles.buttons}>
                <Button 
                    icon={task?.title 
                        ? <FontAwesomeIcon icon={['far', 'pen-to-square']} color='white' /> 
                        : <FontAwesomeIcon icon={['fas', 'plus']} color='white' />
                    }
                    type="submit" 
                    text={task?.title ? 'Update' : 'Add'} 
                />
                {task?.title && <Button 
                    type="submit" 
                    text="Cancel" 
                    onClick={clearTask}
                />}
            </div>
        </form>
    );
};

export default AddTask;
