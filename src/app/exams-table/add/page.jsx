"use client";
import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import Header from "../../components/Headr";
import { days } from "../../class-schedules/add/days";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function ExamsTableAdd() {
    const [materials, setMaterials] = useState({});
    const [academicDivision, setAcademicDivision] = useState();
    const [classRoom, setClassRoom] = useState();
    const [type, setType] = useState();
    const [subject, setSubject] = useState("");
    const [data, setData] = useState("");
    const router = useRouter();
    const handleDayChange = (selectedDay) => {
        const selectedDateTime = selectedDay.target.value;
        const selectedDate = new Date(selectedDateTime);
        const formattedDateTime = selectedDate.toISOString();

        setMaterials((prevMaterials) => ({
            ...prevMaterials,
            [selectedDay.target.name]: {
                subject: subject, // تحديث اسم المادة
                time: formattedDateTime, // تحديث الوقت
            },
        }));
        setSubject("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/exams-table`,
                { type, academicDivision, classRoom, days: materials }
            );
            toast.success(data.data.msg);
            router.push("/exams-table");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    };
    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    };
    const getData = async () => {
        try {
            const rus = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/exams-table`
            );
            setData(rus.data);
            console.log(rus.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <div className="row">
                    <Nav />
                <div className="col-10">
                    <div className="container px-5">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <div className="main-heading">
                                    <h1>جدول الامتحانات</h1>
                                    <div className="fillter mt-3">
                                        <div className="row">
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
                                            <div className="inputs col-4">
                                                <div className="row">
                                                    <div className="col-4 form-check d-flex justify-content-around">
                                                        <input
                                                            type="radio"
                                                            name="type-exam"
                                                            className="form-check-input float-none"
                                                            id="one"
                                                            value="ميد ترم"
                                                            onChange={(e) => {
                                                                setType(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="one"
                                                        >
                                                            ميد ترم
                                                        </label>
                                                    </div>
                                                    <div className="col-4 form-check d-flex justify-content-around">
                                                        <input
                                                            type="radio"
                                                            name="type-exam"
                                                            className="form-check-input float-none"
                                                            id="two"
                                                            value="فاينال"
                                                            onChange={(e) => {
                                                                setType(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="two"
                                                        >
                                                            فاينال
                                                        </label>
                                                    </div>
                                                    <div className="col-4 form-check d-flex justify-content-around">
                                                        <input
                                                            type="radio"
                                                            name="type-exam"
                                                            className="form-check-input float-none"
                                                            id="three"
                                                            value="تخلفات"
                                                            onChange={(e) => {
                                                                setType(
                                                                    e.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="three"
                                                        >
                                                            تخلفات
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <table className="table w-75 table-borderless mt-5">
                                        <tbody>
                                            {days.map((day, index) => {
                                                return (
                                                    <tr
                                                        key={index}
                                                        className="d-flex justify-content-between align-items-center"
                                                    >
                                                        <th
                                                            scope="row"
                                                            className="w-25"
                                                        >
                                                            {day}
                                                        </th>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control w-100"
                                                                name={day}
                                                                onChange={
                                                                    handleSubjectChange
                                                                }
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="datetime-local"
                                                                className="form-control w-100"
                                                                name={day}
                                                                onChange={
                                                                    handleDayChange
                                                                }
                                                            />
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="btns">
                                    <button
                                        className="btn submit btn-dark"
                                        type="submit"
                                        disabled={
                                            !academicDivision ||
                                            !classRoom ||
                                            !type
                                        }
                                        onClick={handleSubmit}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExamsTableAdd;
