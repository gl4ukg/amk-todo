import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "../../types/Task.types"
import styles from "./TaskBox.module.scss"
import { trimTextAfterMaxChars } from "../../helpers/helpers"

const TaskBox = ({ title, description, status }: ITask) => {
    return (
        <div className={styles.box}>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{trimTextAfterMaxChars(description, 160)}</p>
            </div>
            <div className={styles.buttons}>
                <button className={styles.addButton}>
                    <p>{status}</p>
                </button>
                <FontAwesomeIcon icon={['far', 'pen-to-square']} />
            </div>
        </div>
    )
}

export default TaskBox