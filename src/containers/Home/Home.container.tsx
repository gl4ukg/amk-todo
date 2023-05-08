import { useState } from "react";
import AddTask from "../../components/AddTask/AddTask.component";
import { Banner } from "../../components/Banner/Banner.component";
import TaskBox from "../../components/TaskBox/TaskBox.component";
import { useTask } from "../../context/TaskContext";
import styles from "./Home.module.scss"
import { ITask } from "../../types/Task.types";

const Home = () => {
    const [activeTask, setActiveTask] = useState<ITask>()
    const { tasks } = useTask();

    return (
        <div className={styles.home}>
            <Banner title="Home" />
            <div className="container">
                <AddTask 
                    task={activeTask}
                    clearTask={() => setActiveTask({} as ITask)} 
                />
            </div>
            <>
                <Banner title="Tasks" isCurved />
                <div className={styles.tasksContainer}>
                    <div className="container">
                        {tasks?.length > 0 
                            ? tasks.map((item) => <TaskBox 
                                    key={item.id}
                                    title={item.title}
                                    description={item.description}
                                    status={item.status}
                                    onSelect={setActiveTask}
                                />
                            )
                            :  <p>You have nothing to do. Go get some sleep</p>
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default Home