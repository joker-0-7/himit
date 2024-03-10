"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Headr";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import Actions from "../components/Actions";
import DefaultPage from "../components/DefaultPage";
function ClassSchedules() {
    const [schedules, setSchedules] = useState([]);
    const getData = async () => {
        try {
            const data = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/class-schedules`
            );
            setSchedules(data.data);
            console.log(data.data);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            {schedules.length > 0 ? (
                                schedules.map((ele) => {
                                    return (
                                        <div className="col-4" key={ele._id}>
                                            <div
                                                className="box rounded-1 py-4 px-3 mt-4"
                                                style={{
                                                    backgroundColor: "#E9E9E9",
                                                }}
                                            >
                                                <div className="head">
                                                    <div className="name">
                                                        <h1>
                                                            {
                                                                ele.academicDivision
                                                            }
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="section">
                                                    <h3>{ele.classRoom}</h3>
                                                </div>
                                                <div className="action">
                                                    <Actions />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <DefaultPage
                                    page="جدول"
                                    props={{
                                        title: "جدول المحاضرات والسكاشن",
                                        name: "جداول",
                                        link: "/class-schedules/add",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassSchedules;
