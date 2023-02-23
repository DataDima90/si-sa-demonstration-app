import FlexContainer from "@/containers/FlexContainer"
import Button from "./Button"
import { useRouter } from "next/router"
import styles from "./ProductDetailView.module.scss"


const ProductDetailView = (props: any) => {
    const router = useRouter()
    const { item } = props

    return (
        <FlexContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: "250px", marginBottom: "1rem" }} src={item.imageURL} />
                <Button onClick={item?.type === "free" ? () => router.push("/ebook-reader") : () => router.push("/payment")} title={"Read this book"} />
            </div>
            <div>
                <h1>{item?.title}</h1>
                <p>{item?.description}</p>
                <button className={styles.button} style={{ backgroundColor: item?.type === "free" ? "blue" : "orange" }}><span>{item?.type}</span></button>
                {/*                 <a className={style.link} onClick={() => router.push("/ebook-reader")}><span>Reading sample</span></a> */}
            </div>
        </FlexContainer>
    )
}

export default ProductDetailView