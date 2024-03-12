"use client";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Headr";
import "./seating.css";
import DataCount from "../components/DataCount";
import { toast } from "react-toastify";
const SeatingNumbers = () => {
    const [count, setCount] = useState({});
    const [student, setStudent] = useState([]);
    const [isClient, setIsClient] = useState(false);
    const [squad, setSquad] = useState("DEFAULT");
    const [one, setOne] = useState({ from: "", to: "", num: "" });
    const [two, setTwo] = useState({ from: "", to: "", num: "" });
    const [three, setThree] = useState({ from: "", to: "", num: "" });
    const [four, setFour] = useState({ from: "", to: "", num: "" });
    const getData = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/students`
            );
            setStudent(data);
        } catch (error) {
            console.log(error);
        }
    };
    const countData = () => {
        const organizedData = {};
        student.forEach((item) => {
            const section = item.section;
            if (!organizedData[section]) {
                organizedData[section] = [];
            }
            organizedData[section].push(item);
        });
        setCount(organizedData);
    };
    const handleSquad = async (e) => {
        const squadValue = e.target.value;
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/students`
            );
            const filtering =
                squadValue !== "DEFAULT"
                    ? data.filter((s) => s.squad === squadValue)
                    : data;
            setStudent(filtering);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        setIsClient(true);
        getData();
    }, []);
    useEffect(() => {
        countData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [student]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = [];
        const processCategory = (category, from, num) => {
            if (count[category] && count[category].length > 0) {
                let currentFrom = +from;
                let currentNum = +num;
                for (let i = 0; i < count[category].length; i++) {
                    let num = String(currentFrom);
                    count[category][i].seatingNumbers = num.split("");
                    count[category][i].committeeNumber =
                        String(currentNum).split("");
                    data.push(count[category][i]);
                    currentFrom++;
                    console.log(currentFrom);
                }
            }
        };
        processCategory("علوم حاسب", one.from, one.num);
        processCategory("محاسبة", two.from, two.num);
        processCategory("نظم ومعلومات", three.from, three.num);
        processCategory("ادارة اعمال", four.from, four.num);
        console.log(data);
        try {
            const response = await axios.put(
                `${process.env.NEXT_PUBLIC_API}/users/add-seating-numbers`,
                data
            );
            // toast.success(response.data.msg);
        } catch (error) {
            console.error(error);
            // toast.error(error.response.data.msg);
        }
    };
    return isClient ? (
        <div className="seating-numbers">
            <Nav />

            <div className="container">
                <Header />
                <form onSubmit={handleSubmit}>
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">
                                    <select
                                        name="squad"
                                        className="form-control"
                                        defaultValue={squad}
                                        onChange={handleSquad}
                                    >
                                        <option value="DEFAULT" selected>
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
                                </th>
                            </tr>
                        </thead>
                        <br />
                        <tbody>
                            <tr>
                                <th scope="row">علوم الحاسب</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="من"
                                        onChange={(e) => {
                                            setOne({
                                                ...one,
                                                from: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="الي"
                                        onChange={(e) => {
                                            setOne({
                                                ...one,
                                                to: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="رقم اللجنة"
                                        onChange={(e) => {
                                            setOne({
                                                ...one,
                                                num: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <th scope="row">محاسبة</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="من"
                                        onChange={(e) => {
                                            setTwo({
                                                ...two,
                                                from: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="الي"
                                        onChange={(e) => {
                                            setTwo({
                                                ...two,
                                                to: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="رقم المجموعة"
                                        onChange={(e) => {
                                            setTwo({
                                                ...two,
                                                num: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <th scope="row">نظم ومعلومات ادارية</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="من"
                                        onChange={(e) => {
                                            setThree({
                                                ...three,
                                                from: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="الي"
                                        onChange={(e) => {
                                            setThree({
                                                ...three,
                                                to: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="رقم المجموعة"
                                        onChange={(e) => {
                                            setThree({
                                                ...three,
                                                num: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <th scope="row">ادارة اعمال</th>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="من"
                                        onChange={(e) => {
                                            setFour({
                                                ...four,
                                                from: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="الي"
                                        onChange={(e) => {
                                            setFour({
                                                ...four,
                                                to: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="رقم المجموعة"
                                        onChange={(e) => {
                                            setFour({
                                                ...four,
                                                num: e.target.value,
                                            });
                                        }}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-dark send ms-4" type="submit">
                        ارسال
                    </button>
                    <button className="btn cancle">الغاء</button>
                    <DataCount count={count} />
                </form>
            </div>
        </div>
    ) : (
        ""
    );
};
export default SeatingNumbers;
