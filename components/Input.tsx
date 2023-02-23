import style from "./Input.module.scss"

const Input = (props: any) => {
    return (
        <div>
            <input className={style.input} type="file" {...props} />
        </div>
    )
}


export default Input