import { Storage } from "aws-amplify";
import { useState } from "react";
import Button from "../../components/Button";
import { AiOutlineDownload } from "react-icons/ai"
import Input from "@/components/Input";

const UploadVideo = () => {

    const [fileData, setFileData] = useState({ name: "", type: "" });
    const [fileStatus, setFileStatus] = useState(false);

    const uploadFile = async () => {
        const result = await Storage.put(fileData?.name, fileData, {
            contentType: fileData?.type,
        });
        setFileStatus(true);
    };
    return (
        <div>
            <div style={{ textAlign: "center", margin: "1rem 2rem" }}>
                <h2>Upload your videos and make thousands of people happy, on demand!</h2>
            </div>
            <div style={{ textAlign: "center", margin: "1rem 2rem" }}>
                <img style={{ width: "300px", height: "100%" }} src={"https://img.freepik.com/free-vector/video-upload-concept-illustration_114360-4702.jpg?w=1060&t=st=1677175535~exp=1677176135~hmac=cf4a5c3547b08b04407fda5cb25315f1ffd084283e0e635fa64fc237d2d4771a"} />
            </div>
            <div>
                <div style={{ marginBottom: "0.5rem" }}>
                    <Input onChange={(e: any) => setFileData(e.target.files[0])} />
                </div>
                {/*   <p>{fileData?.name}</p> */}
                <Button icon={<AiOutlineDownload color={"white"} style={{ marginRight: "0.5rem", padding: "0" }} size={20} />} onClick={uploadFile} title={"Upload File"} />
                {fileStatus ? "File uploaded successfully" : ""}
            </div>
        </div >
    )
}

export default UploadVideo