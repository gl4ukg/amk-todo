import { IButton } from "../../types/Button.types"
import styles from "./Button.module.scss"

const Button = ({ onClick, text, icon }: IButton) => {
    return (
        <button 
            className={styles.button} 
            onClick={onClick}
        >
            {icon}
            <p>{text}</p>
        </button>
    )
}

export default Button