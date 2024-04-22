"use client";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Header from "../components/Headr";
import axios from "axios";
import { toast } from "react-toastify";
import DefaultPage from "../components/DefaultPage";
import Actions from "../components/Actions";
import Image from "next/image";
import ModalCopmonent from "../components/Modal";
import Link from "next/link";


function ExamsTable() {
    const [materials, setMaterials] = useState({});
    const [academicDivision, setAcademicDivision] = useState();
    const [classRoom, setClassRoom] = useState();
    const [type, setType] = useState();
    const [subject, setSubject] = useState("");
    const [open, setOpen] = useState(false);
    const [delId, setDelId] = useState("");
    const [data, setData] = useState("");

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
    const showModal = (e) => {
        setOpen(true);
        setDelId(e);
    };
    useEffect(() => {
        getData();
    }, []);
    const hideModal = () => {
        setOpen(false);
    };
    const editSchedule = (e) => {
        console.log(e);
        router.push(`/class-schedules/edit/${e}`);
    };
    const handleDelete = async (e) => {
        console.log(delId);
        try {
            const del = await axios.delete(
                `${process.env.NEXT_PUBLIC_API}/users/exams-table/${delId}`
            );
            toast.success(del.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
        setOpen(false);
        getData();
    };
      return (
        <div>
            <div className="row">
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <Header />
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <h1>جداول الامتحانات</h1>
                                </div>
                                <div className="col-6 text-start">
                                    <Link
                                        href="/exams-table/add"
                                        className="btn btn-dark me-auto"
                                    >
                                        اضافة جدول
                                    </Link>
                                </div>
                            </div>
                            {data.length > 0 ? (
                                data.map((ele) => {
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
                                    page="جداول امتحانات"
                                    props={{
                                        title: "جدول امتحانات",
                                        name: "جداول",
                                        link: "/exams-table/add",
                                    }}
                                />
                            )}
                        </div>
                    </div>
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
    );
}

export default ExamsTable;
