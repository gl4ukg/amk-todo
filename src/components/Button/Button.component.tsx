import classNames from "classnames"
import { IButton } from "../../types/Button.types"
import styles from "./Button.module.scss"
import { FC } from "react"

const Button: FC<IButton> = ({ onClick, text, icon, isTransparent }) => {
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