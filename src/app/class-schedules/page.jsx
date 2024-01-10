"use client";
import { useState } from "react";
import Header from "../components/Headr";
import Nav from "../components/Nav";
import { days } from "./days";
import axios from "axios";
import { toast } from "react-toastify";

const ClassSchedules = () => {
    const [feildCount, setFeildCount] = useState([1, 2, 3]);
    const [materials, setMaterials] = useState([]);
    const [mainDay, setMainDay] = useState("");
    const [type, setType] = useState();
    const [academicDivision, setAcademicDivision] = useState();
    const [classRoom, setClassRoom] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(materials);
        try {
            const data = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/class-schedules`,
                { type, academicDivision, classRoom, days: materials }
            );
            toast.success(data.data.msg);
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
        setMaterials((prevMaterials) => ({
            ...prevMaterials,
            [selectedDay]: prevMaterials[selectedDay] || [],
        }));
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
                                <div className="form">
                                    <form onSubmit={handleSubmit}>
                                        <div className="filter row mt-5">
                                            <div className="section col-4">
                                                <select
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setAcademicDivision(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value="يرجي اختيار الشعبة"
                                                        selected
                                                        disabled
                                                    >
                                                        يرجي اختيار الشعبة
                                                    </option>
                                                    <option value="علوم حاسب">
                                                        علوم حاسب
                                                    </option>
                                                    <option value="نظم ومعلومات">
                                                        نظم ومعلومات
                                                    </option>
                                                    <option value="محاسبة">
                                                        محاسبة
                                                    </option>
                                                    <option value="ادارة اعمال">
                                                        ادارة اعمال
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="Squad col-4">
                                                <select
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setClassRoom(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option
                                                        value="يرجي اختيار الفرقة"
                                                        selected
                                                        disabled
                                                    >
                                                        يرجي اختيار الفرقة
                                                    </option>
                                                    <option value="الفرقة الأولي">
                                                        الفرقة الأولي
                                                    </option>
                                                    <option value="الفرقة الثانية">
                                                        الفرقة الثانية
                                                    </option>
                                                    <option value="الفرقة الثالثة">
                                                        الفرقة الثالثة
                                                    </option>
                                                    <option value="الفرقة الرابعة">
                                                        الفرقة الرابعة
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="Squad col-2">
                                                <select
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        setType(e.target.value)
                                                    }
                                                >
                                                    <option
                                                        value="يرجي اختيار الجدول"
                                                        selected
                                                        disabled
                                                        onChange={(e) =>
                                                            setType(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        يرجي اختيار الجدول
                                                    </option>
                                                    <option value="جدول المحاضرات">
                                                        جدول المحاضرات
                                                    </option>
                                                    <option value="جدول السكاشن">
                                                        جدول السكاشن
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="btn col-2">
                                                <span
                                                    className="btn btn-dark"
                                                    onClick={addField}
                                                >
                                                    اضافة مادة
                                                </span>
                                            </div>
                                        </div>
                                        <div className="days d-flex justify-content-around mt-5">
                                            {days.map((day, index) => {
                                                return (
                                                    <label
                                                        key={index}
                                                        className={`btn ${
                                                            day === mainDay
                                                                ? "btn-dark"
                                                                : "btn-outline-dark"
                                                        } `}
                                                    >
                                                        <input
                                                            type="radio"
                                                            id={index}
                                                            name="day"
                                                            value={day}
                                                            hidden
                                                            onChange={() => {
                                                                handleDayChange(
                                                                    day
                                                                );
                                                            }}
                                                        />
                                                        {day}
                                                    </label>
                                                );
                                            })}
                                        </div>
                                        <div className="inputs row gy-3 mt-5">
                                            {feildCount.map((count, index) => {
                                                return (
                                                    <>
                                                        <div className="name-material col-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                disabled={
                                                                    mainDay
                                                                        ? false
                                                                        : true
                                                                }
                                                                placeholder="اسم المادة"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedMaterials =
                                                                        {
                                                                            ...materials,
                                                                        };
                                                                    updatedMaterials[
                                                                        mainDay
                                                                    ][index] = {
                                                                        ...updatedMaterials[
                                                                            mainDay
                                                                        ][
                                                                            index
                                                                        ],
                                                                        name: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setMaterials(
                                                                        updatedMaterials
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="name-material col-4">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                disabled={
                                                                    mainDay
                                                                        ? false
                                                                        : true
                                                                }
                                                                placeholder="دكتور الماده"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedMaterials =
                                                                        {
                                                                            ...materials,
                                                                        };
                                                                    updatedMaterials[
                                                                        mainDay
                                                                    ][index] = {
                                                                        ...updatedMaterials[
                                                                            mainDay
                                                                        ][
                                                                            index
                                                                        ],
                                                                        doctor: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setMaterials(
                                                                        updatedMaterials
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                        <div className="name-material col-4">
                                                            <input
                                                                type="time"
                                                                className="form-control"
                                                                disabled={
                                                                    mainDay
                                                                        ? false
                                                                        : true
                                                                }
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    const updatedMaterials =
                                                                        {
                                                                            ...materials,
                                                                        };
                                                                    updatedMaterials[
                                                                        mainDay
                                                                    ][index] = {
                                                                        ...updatedMaterials[
                                                                            mainDay
                                                                        ][
                                                                            index
                                                                        ],
                                                                        time: e
                                                                            .target
                                                                            .value,
                                                                    };
                                                                    setMaterials(
                                                                        updatedMaterials
                                                                    );
                                                                }}
                                                            />
                                                        </div>
                                                    </>
                                                );
                                            })}
                                        </div>
                                        <div className="btns mt-5">
                                            <button
                                                className="btn submit btn-dark"
                                                type="submit"
                                            >
                                                حفظ
                                            </button>
                                            <button
                                                className="btn cancle btn-outline-dark me-4"
                                                onClick={() => {
                                                    window.history.back();
                                                }}
                                            >
                                                الغاء
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClassSchedules;
