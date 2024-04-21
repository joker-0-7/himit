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
import ModalCopmonent from "../components/Modal";
import { useRouter } from "next/navigation";
function ClassSchedules() {
    const [schedules, setSchedules] = useState([]);
    const [open, setOpen] = useState(false);
    const [delId, setDelId] = useState("");
    const router = useRouter();
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
    const showModal = (e) => {
        setOpen(true);
        setDelId(e);
    };
    const handleDelete = async (e) => {
        console.log(delId);
        try {
            const del = await axios.delete(
                `${process.env.NEXT_PUBLIC_API}/users/delete-class-schedules/${delId}`
            );
            toast.success(del.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
        setOpen(false);
        getData();
    };
    const hideModal = () => {
        setOpen(false);
    };
    const editSchedule = (e) => {
        console.log(e);
        router.push(`/class-schedules/edit/${e}`);
    };
    return (
        <div className="row">
            <Nav />
            <div className="container col-10 px-5">
                <div className="row">
                    <div className="col-12">
                        <Header />
                    </div>
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6">
                                        <h1>الجداول الدراسية</h1>
                                    </div>
                                    <div className="col-6 text-start">
                                        <Link
                                            href="/class-schedules/add"
                                            className="btn btn-dark me-auto"
                                        >
                                            اضافة جدول
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {schedules.length > 0 ? (
                                schedules.map((ele) => {
                                    return (
                                        <div className="col-4" key={ele._id}>
                                            <div
                                                className="box rounded-2 py-4 px-3 mt-4 position-relative"
                                                style={{
                                                    backgroundColor: "#E9E9E9",
                                                }}
                                            >
                                                <div
                                                    className="img position-absolute"
                                                    style={{
                                                        bottom: 0,
                                                        left: 0,
                                                    }}
                                                >
                                                    <Image
                                                        src="/images/logo/opacity-logo.png"
                                                        width={100}
                                                        height={100}
                                                        alt="image"
                                                    />
                                                </div>
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
                                                <div className="type">
                                                    <h3>{ele.type}</h3>
                                                </div>
                                                <div className="action">
                                                    <Actions
                                                        showModal={showModal}
                                                        id={ele._id}
                                                        user={ele._id}
                                                        editStudent={
                                                            editSchedule
                                                        }
                                                    />
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
                        <ModalCopmonent
                            showModal={showModal}
                            hideModal={hideModal}
                            open={open}
                            page="الجدول"
                            name="الجدول"
                            handleDelete={handleDelete}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassSchedules;
