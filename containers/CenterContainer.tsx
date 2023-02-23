import React from "react"
import styles from "./CenterContainer.module.scss"

const CenterContainer = (props: any) => {
    return (
        <div className={styles.container} {...props}>
            {props.children}
        </div>
    )
}

export default CenterContainer