import classNames from "classnames"
import { IBanner } from "../../types/Banner.types"
import styles from "./Banner.module.scss"
import { FC } from "react"

export const Banner: FC<IBanner> = ({ title, isCurved }) => {
    return (
        <div 
            className={classNames(styles.banner, {
                [styles.banner__curved]: isCurved
            })}
            data-testid="banner"
        >
            <div className="container">
                <p className={styles.title}>{!isCurved && 'Task Managment > '}{title}</p>
            </div>
        </div>
    )
}