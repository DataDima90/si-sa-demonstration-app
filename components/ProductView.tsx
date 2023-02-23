import styles from "./ProductView.module.scss"
import React from "react"


interface IProductViewProps {
    item: {
        title: string
        description: string,
        priceType: string,
        id: string,
        imageURL: string
    },

}

const ProductView = ({ item }: IProductViewProps) => {
    return (
        <div key={item.id}>
            <div>
                <img style={{ width: "200px" }} src={item.imageURL} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>{item.priceType}</p>
        </div>
    )
}

export default ProductView