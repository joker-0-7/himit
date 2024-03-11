"use client";
import FormClassSchedules from "@/app/components/FormClassSchedules";
import Nav from "@/app/components/Nav";
import Header from "../../../components/Headr";
import axios from "axios";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Edd() {
    const pathName = usePathname();
    const [feildCount, setFeildCount] = useState([1, 2, 3]);
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
    const getData = async () => {
        try {
            const data = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/class-schedules/${
                    pathName.split("/")[3]
                }`
            );
            console.log(data.data);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(pathName.split("/")[3]);
        try {
            const data = await axios.put(
                `${process.env.NEXT_PUBLIC_API}/users/class-schedules/${
                    pathName.split("/")[3]
                }`,
                { type, academicDivision, classRoom, days: materials }
            );
            toast.success(data.data.msg);
            console.log(data);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
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
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-9">
                    <div className="container">
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
                                        page: "edit",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Edd;
