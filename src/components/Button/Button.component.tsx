import classNames from "classnames"
import { IButton } from "../../types/Button.types"
import styles from "./Button.module.scss"

const Button = ({ onClick, text, icon, isTransparent }: IButton) => {
    return (
        <button 
            className={classNames(styles.button, {
                [styles.button__transparent]: isTransparent
            })} 
            onClick={onClick}
        >
            {icon}
            <p>{text}</p>
        </button>
    )
}

export default Button