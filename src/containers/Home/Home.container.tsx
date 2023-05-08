import TaskBox from "../../components/TaskBox/TaskBox.component";
import { useTask } from "../../context/TaskContext";


const Home = () => {
    const { tasks } = useTask();

    return (
        <div>
            {tasks.map(({ title, description, status }) => 
                <TaskBox 
                    title={title}
                    description={description}
                    status={status}
                />
            )}
        </div>
    )
}

export default Home