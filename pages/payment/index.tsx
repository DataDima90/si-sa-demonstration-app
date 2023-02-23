import Button from "@/components/Button"
import CenterContainer from "@/containers/CenterContainer"
import { useRouter } from "next/router"


const index = () => {
    const router = useRouter()

    return (
        <CenterContainer style={{ flexDirection: "column" }}>
            <h1 style={{ marginBottom: "1rem" }}>Start reading with a 7-day free trial</h1>
            <Button onClick={() => router.back()} title={"Go Back!"} />
        </CenterContainer>
    )

}
export default index;