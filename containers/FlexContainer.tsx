import React from "react"
import styles from "./FlexContainer.module.scss"

const FlexContainer = (props: any) => {
    return (
        <div className={styles.flex__container}>
            {props.children}
        </div>
    )
}

export default FlexContainer