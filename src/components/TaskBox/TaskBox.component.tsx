import { FC } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ITask } from "../../types/Task.types"
import styles from "./TaskBox.module.scss"
import { trimTextAfterMaxChars } from "../../helpers/helpers"
import Button from "../Button/Button.component"

const TaskBox: FC<ITask> = (item) => {
    const { title, description, status, onSelect } = item;

    return (
        <div className={styles.box}>
            <div>
                <p className={styles.title}>{title}</p>
                <p className={styles.description}>{trimTextAfterMaxChars(description, 160)}</p>
            </div>
            <div 
                data-testid="task-box"
                onClick={() => onSelect?.(item)} 
                className={styles.buttons}
            >
                <Button text={status} />
                <FontAwesomeIcon icon={['far', 'pen-to-square']} />
            </div>
        </div>
    )
}

export default TaskBox