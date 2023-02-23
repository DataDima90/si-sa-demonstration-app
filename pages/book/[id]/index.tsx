import { useRouter } from "next/router";
import EBOOK_DATA from "@/data/eBookData";
import ProductDetailView from "@/components/ProductDetailView";
import PaymentWall from "@/components/PaymentView";
import FlexContainer from "@/containers/FlexContainer";

const index = () => {
    const router = useRouter();
    const { id } = router.query;
    const DATA = EBOOK_DATA[id]
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <FlexContainer>
                <ProductDetailView item={DATA} />
                <PaymentWall />
            </FlexContainer>
        </div>
    )

}
export default index;