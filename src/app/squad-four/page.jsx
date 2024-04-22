"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const { default: Filter } = require("../components/Filter");
const { default: Header } = require("../components/Headr");
const { default: Nav } = require("../components/Nav");

const SquadFour = () => {
    const [users, setUsers] = useState([]);
    const [data, setData] = useState({});
    const [disabled, setDisable] = useState(false);
    const router = useRouter();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/students`
            );
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    };

    const calculateTotal = (studentId) => {
        const fields = ["one", "two", "three", "four"];
        let total = 0;
        fields.forEach((field) => {
            const value = parseFloat(data[studentId]?.[field]) || 0;
            total += value;
        });
        return total;
    };

    const calculatePercentage = (studentId) => {
        const total = calculateTotal(studentId);
        // تحويل النسبة إلى قيمة بين 0 و1000
        const percentage = (total / 4000) * 100;
        return percentage;
    };

    const handelChange = (e, studentId) => {
        const fieldName = e.target.getAttribute("data-field");
        const value = e.target.type === "radio" ? e.target.id : e.target.value;

        setData((prevData) => ({
            ...prevData,
            [studentId]: {
                ...prevData[studentId],
                [fieldName]: value,
            },
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = { ...data };
        Object.keys(updatedData).forEach((studentId) => {
            updatedData[studentId] = {
                ...updatedData[studentId],
                cumulative: calculateTotal(studentId),
                ratio: calculatePercentage(studentId),
            };
        });
        setDisable(true);
        try {
            await axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/add-cumulative`,
                updatedData
            );

            router.push("/students");
            setDisable(false);
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.msg);
            setDisable(false);
        }
    };
    const setSection = async (e) => {
        const squadValue = e.target.value;
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/students`
            );
            const filtering =
                squadValue !== "DEFAULT"
                    ? data.filter((s) => s.section === squadValue)
                    : data;
            setUsers(filtering);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="squad-four">
            <div className="row">
                    <Nav />
                <div className="container px-5 col-10">
                    <div className="row">
                        <div className="col-12">
                            <Header />
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-10">
                                    <div className="row">
                                         <Filter
                                            page="four"
                                            setSection={setSection}
                                        />
                                    </div>
                                </div>
                                <div className="col-2">
                                    <button
                                        className="btn btn-dark"
                                        onClick={handleSubmit}
                                        disabled={disabled}
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                            <div className="users mt-5">
                                <table className="table table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">رقم الجلوس</th>
                                            <th scope="col">اسم الطالب</th>
                                            <th scope="col">الفرقة الاولي</th>
                                            <th scope="col">الفرقة الثانيه</th>
                                            <th scope="col">الفرقة الثالثة</th>
                                            <th scope="col">الفرقة الرابعة</th>
                                            <th scope="col">مجموع تراكمي</th>
                                            <th scope="col">النسبة</th>
                                            <th scope="col">تقدير عام</th>
                                            <th scope="col">تربية عسكرية</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((student, index) => {
                                            return (
                                                <tr key={student._id}>
                                                    <th scope="row">
                                                        {index + 1}
                                                    </th>
                                                    <td>
                                                        <div className="data">
                                                            <div className="name">
                                                                {student.fristName +
                                                                    " " +
                                                                    student.lastName}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="one"
                                                            onChange={(e) =>
                                                                handelChange(
                                                                    e,
                                                                    student._id
                                                                )
                                                            }
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="two"
                                                            onChange={(e) => {
                                                                handelChange(
                                                                    e,
                                                                    student._id
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="three"
                                                            onChange={(e) => {
                                                                handelChange(
                                                                    e,
                                                                    student._id
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="four"
                                                            onChange={(e) => {
                                                                handelChange(
                                                                    e,
                                                                    student._id
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="cumulative"
                                                            value={calculateTotal(
                                                                student._id
                                                            )}
                                                            readOnly
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="ratio"
                                                            value={calculatePercentage(
                                                                student._id
                                                            )}
                                                            readOnly
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            className="form-control w-50"
                                                            data-field="overallEstimate"
                                                            onChange={(e) => {
                                                                handelChange(
                                                                    e,
                                                                    student._id
                                                                );
                                                            }}
                                                        />
                                                    </td>
                                                    <td
                                                        style={{
                                                            width: "250px",
                                                        }}
                                                    >
                                                        <div className="row">
                                                            <div
                                                                className="col-6 form-check"
                                                                style={{
                                                                    width: "90px",
                                                                }}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    id={`done-${student._id}`}
                                                                    data-field="military"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handelChange(
                                                                            e,
                                                                            student._id
                                                                        );
                                                                    }}
                                                                    className="form-check-input"
                                                                    name={
                                                                        student._id
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`done-${student._id}`}
                                                                    className="form-check-label"
                                                                >
                                                                    اجتاز
                                                                </label>
                                                            </div>
                                                            <div
                                                                className="col-6 form-check"
                                                                style={{
                                                                    width: "90px",
                                                                }}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    data-field="military"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        handelChange(
                                                                            e,
                                                                            student._id
                                                                        );
                                                                    }}
                                                                    className="form-check-input"
                                                                    id={`not-${student._id}`}
                                                                    name={
                                                                        student._id
                                                                    }
                                                                />
                                                                <label
                                                                    htmlFor={`not-${student._id}`}
                                                                    className="form-check-label"
                                                                >
                                                                    لم يجتاز
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SquadFour;
