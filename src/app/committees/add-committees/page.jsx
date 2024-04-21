"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const { default: Header } = require("../../components/Headr");
const { default: Nav } = require("../../components/Nav");

const AddCommittees = () => {
    const [committe, setCommitte] = useState({
        section: "",
        squad: "",
        built: "",
        place: "",
        from: "",
        to: "",
    });
    const [users, setUsers] = useState([]);
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
    useEffect(() => {
        getData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        let arr = [];
        for (let i = +committe.from; i <= +committe.to; i++) {
            arr.push(i);
        }
        const data = [];
        users.forEach((user) => {
            const setNum = user.seatingNumbers.join("");
            arr.forEach((num) => {
                if (setNum.includes(String(num))) {
                    committe.from = undefined;
                    committe.to = undefined;
                    user.committe = committe;
                    data.push(user);
                    console.log(user);
                }
            });
        });
        try {
            const rus = axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/committe`,
                data
            );
        } catch (error) {
            console.log(error);
        }
    };
    const handleChange = (e) => {
        setCommitte({ ...committe, [e.target.name]: e.target.value });
    };
    const numCommitteFun = () => {
        //  count[category][i].committeeNumber =
        //                 String(currentNum).split("");
    };
    return (
        <div className="add-committe">
            <div className="row">
                    <Nav />
                <div className="col-10">
                    <div className="container px-5">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="col-12">
                                <div className="main-headin">
                                    <h1>اللجان</h1>
                                </div>
                            </div>
                            <div className="col-12">
                                <form onSubmit={handleSubmit}>
                                    <div className="row row-gap-3">
                                        <div className="section col-lg-6 col-sm-12">
                                            <select
                                                className="form-control"
                                                onChange={handleChange}
                                                name="section"
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
                                        <div className="Squad col-lg-6 col-sm-12">
                                            <input
                                                type="text"
                                                placeholder="اكتب رقم اللجنه"
                                                className="form-control"
                                                onChange={numCommitteFun}
                                            />
                                        </div>
                                        <div className="dor col-lg-6 col-sm-12">
                                            <input
                                                type="text"
                                                className="form-control mb-0"
                                                placeholder="الدور"
                                                value={committe.built}
                                                onChange={handleChange}
                                                name="built"
                                            />
                                        </div>
                                        <div className="dor col-lg-6 col-sm-12">
                                            <input
                                                type="text"
                                                className="form-control mb-0"
                                                placeholder="مكان الامتحان"
                                                onChange={handleChange}
                                                value={committe.place}
                                                name="place"
                                            />
                                        </div>
                                        <div className="dor col-lg-6 col-sm-12">
                                            <input
                                                type="text"
                                                className="form-control mb-0"
                                                placeholder="من"
                                                name="from"
                                                value={committe.from}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="dor col-lg-6 col-sm-12">
                                            <input
                                                type="text"
                                                className="form-control mb-0"
                                                placeholder="الي"
                                                value={committe.to}
                                                onChange={handleChange}
                                                name="to"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-dark">
                                                ارسال
                                            </button>
                                            <button
                                                className="btn-outline-dark btn me-4"
                                                onClick={() => {
                                                    window.history.back();
                                                }}
                                            >
                                                الغاء
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddCommittees;
