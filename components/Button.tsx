import styles from "./Button.module.scss"


const Button = (props: any) => {
    return (
        <a id="button" className={styles.button__container} {...props}>
            {props.icon ? props.icon : null}
            <span className={styles.button__text}>{props.title}</span>
        </a>
    )
}

export default Button