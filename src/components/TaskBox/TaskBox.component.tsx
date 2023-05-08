import { Task } from "../../types/Task.types"
import styles from "./TaskBox.module.scss"

const TaskBox = ({ title, description, status }: Task) => {
    return (
        <div className={styles.box}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <div className={styles.buttons}>
                <button className={styles.addButton}>
                    <p>{status} Todo</p>
                </button>
                <i className="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
    )
}

export default TaskBox