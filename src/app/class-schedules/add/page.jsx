"use client";
import { useState } from "react";
import Header from "../../components/Headr";
import Nav from "../../components/Nav";
import axios from "axios";
import { toast } from "react-toastify";
import FormClassSchedules from "@/app/components/FormClassSchedules";
import { useRouter } from "next/navigation";

const AddClassSchedules = () => {
    const [feildCount, setFeildCount] = useState([1, 2, 3]);
    const [disabled, setDisable] = useState(false);
    const router = useRouter();
    const [materials, setMaterials] = useState([
        { name: "السبت", data: [] },
        { name: "الأحد", data: [] },
        { name: "الأثنين", data: [] },
        { name: "الثلاثاء", data: [] },
        { name: "الأربعاء", data: [] },
        { name: "الخميس", data: [] },
    ]);
    const [inputs, setInputs] = useState([
        { type: "text", name: "subjName", placeHolder: "اسم المادة" },
        { type: "text", name: "docName", placeHolder: "دكتور الماده" },
        { type: "time", name: "time", placeHolder: "time" },
    ]);
    const [mainDay, setMainDay] = useState("");
    const [type, setType] = useState();
    const [academicDivision, setAcademicDivision] = useState();
    const [classRoom, setClassRoom] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        try {
            const data = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/class-schedules`,
                { type, academicDivision, classRoom, days: materials }
            );
            toast.success(data.data.msg);
            router.push("/class-schedules");
            setDisable(false);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
            setDisable(false);
        }
    };
    const addField = () => {
        setFeildCount((prevFeildCount) => [
            ...prevFeildCount,
            prevFeildCount.length + 1,
        ]);
    };
    const handleDayChange = (selectedDay) => {
        setMainDay(selectedDay);
    };

    const changeDay = (e, index) => {
        const { name, value } = e.target;
        const updatedMaterials = [...materials];
        updatedMaterials.find((day) => day.name === mainDay).data[index] = {
            ...updatedMaterials.find((day) => day.name === mainDay).data[index],
            [name]: value,
        };
        setMaterials(updatedMaterials);
    };

    return (
        <div className="class-schedules">
            <div className="row">
                    <Nav />
                <div className="col-10">
                    <div className="container px-5">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <div className="main-head">
                                    <h1>جدول المحاضرات والسكاشن</h1>
                                </div>
                                <FormClassSchedules
                                    props={{
                                        handleSubmit,
                                        addField,
                                        handleDayChange,
                                        changeDay,
                                        setType,
                                        setAcademicDivision,
                                        setClassRoom,
                                        feildCount,
                                        mainDay,
                                        inputs,
                                        disabled,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddClassSchedules;
