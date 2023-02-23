import style from "./Input.module.scss"
import Button from "./Button"

const Input = (props: any) => {
    return (
        <label>
            <input className={style.input} type="file" {...props} />
            <Button style={{ backgroundColor: "grey", padding: "0.57rem 0.75rem" }} title="Choose a file" />
        </label>
    )
}


export default Input