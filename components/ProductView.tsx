import styles from "./ProductView.module.scss"
import React from "react"

const ProductView = ({ item }: any) => {
    return (
        <div key={item.id}>
            <div>
                <img style={{ width: "200px" }} src={item.imageURL} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className={styles.button} style={{ backgroundColor: item?.type === "free" ? "blue" : "orange" }}><span>{item?.type}</span></button>
        </div>
    )
}

export default ProductView