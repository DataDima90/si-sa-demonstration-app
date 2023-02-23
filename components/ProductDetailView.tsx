import FlexContainer from "@/containers/FlexContainer"
import Button from "./Button"
import { useRouter } from "next/router"
import style from "./ProductDetailView.module.scss"


const ProductDetailView = (props: any) => {
    const router = useRouter()
    const { item } = props

    return (
        <FlexContainer>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <img style={{ width: "300px", marginBottom: "1rem" }} src={item.imageURL} />
                <Button onClick={() => router.push("/payment")} title={"Read this book"} />
            </div>
            <div>
                <h1>{item?.title}</h1>
                <p>{item?.description}</p>
                <p>{item?.type}</p>
                <a className={style.link} onClick={() => router.push("/ebook-reader")}><span>Reading sample</span></a>
            </div>
        </FlexContainer>
    )
}

export default ProductDetailView