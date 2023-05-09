import { useState, useEffect, FC, ChangeEvent } from 'react';
import { useTask } from '../../context/TaskContext';
import { ITaskForm, TaskStatus } from '../../types/Task.types';
import styles from "./TaskForm.module.scss"
import Button from '../Button/Button.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInput from '../Inputs/TextInput/TextInput.component';
import { Textarea } from '../Inputs/TextArea/TextArea.component';
import SelectInput from '../Inputs/SelectInput/SelectInput.component';


const TaskForm: FC<ITaskForm> = ({ task, clearTask }) => {
    const { addTask, updateTask } = useTask();
    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [status, setStatus] = useState<TaskStatus>(task?.status || 'ToDo');
    const [isEdit, setEdit] = useState<boolean>(false)

    useEffect(() => {
        if(task) {
            setEdit(true)
        }
        setTitle(task?.title || '');
        setDescription(task?.description || '');
        setStatus(task?.status || 'ToDo');
    }, [task]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim() === '') return
        if (task) {
            updateTask(task?.id ?? 0, { title, description, status });
            setEdit(false)
        } else {
            addTask({ title, description, status });
        }
        setTitle('')
        setDescription('')
        setStatus('ToDo')
        clearTask?.()
     };
    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <TextInput
                label="Title"
                placeholder="Title"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                required
            />
            <Textarea
                label="Description:"
                value={description}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                required
                placeholder="Description"
            />
            {isEdit && <SelectInput 
                value={status} 
                onChange={(e: string) => setStatus(e as TaskStatus)} 
            />}
            <div className={styles.buttons}>
                <Button 
                    icon={isEdit 
                        ? <FontAwesomeIcon icon={['far', 'pen-to-square']} color='white' /> 
                        : <FontAwesomeIcon icon={['fas', 'plus']} color='white' />
                    }
                    type="submit" 
                    text={isEdit ? 'Update' : 'Add'} 
                />
                {isEdit && <Button 
                    type="submit" 
                    text="Cancel" 
                    onClick={() => {
                        clearTask?.()
                        setEdit(false)
                    }}
                />}
            </div>
        </form>
    );
};

export default TaskForm;
