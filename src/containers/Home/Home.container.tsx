import { Banner } from "../../components/Banner/Banner.component";
import TaskBox from "../../components/TaskBox/TaskBox.component";
import { useTask } from "../../context/TaskContext";
import styles from "./Home.module.scss"

const Home = () => {
    const { tasks } = useTask();

    return (
        <div className={styles.home}>
            <Banner title="Home" />
            <>
                <Banner title="Tasks" isCurved />
                <div className={styles.tasksContainer}>
                    <div className="container">
                        {tasks?.length > 0 
                            ? tasks.map(({ id, title, description, status }) => 
                                <TaskBox 
                                    key={id}
                                    title={title}
                                    description={description}
                                    status={status}
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