"use client";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
const VisionAndMission = () => {
    const [content, setContent] = useState("");
    const [contentId, setContentId] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.put(
                `${process.env.NEXT_PUBLIC_API}/users/goal-application/${contentId}`,
                { VisionAndMission: content }
            );
            toast.success(data.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    };
    const getContent = async () => {
        try {
            const data = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/goal-application`
            );
            setContentId(data.data._id);
            setContent(data.data.VisionAndMission);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getContent();
    }, []);
    return (
        <form onSubmit={handleSubmit}>
            <textarea
                rows="10"
                className="form-control"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="btns" style={{ paddingTop: "47px" }}>
                <button
                    className="btn btn-dark"
                    style={{
                        width: "123px",
                        height: "47px",
                        marginLeft: "10px",
                    }}
                >
                    حفظ
                </button>
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="btn btn-outline-dark"
                    style={{
                        width: "123px",
                        height: "47px",
                    }}
                >
                    الغاء
                </button>
            </div>
        </form>
    );
};
export default VisionAndMission;
