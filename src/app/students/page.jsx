"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import Nav from "../components/Nav";
import { useRouter } from "next/navigation";
import "./students.css";
import axios from "axios";
import Link from "next/link";
import Actions from "../components/Actions";
import ModalCopmonent from "../components/Modal";
import Filter from "../components/Filter";
const Student = () => {
    const [open, setOpen] = useState(false);
    const [student, setStudent] = useState("");
    const [users, setUsers] = useState([]);
    const [delId, setDelId] = useState("");
    const [squad, setSquad] = useState("");
    const [section, setSection] = useState("");
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
    const showModal = (e) => {
        setOpen(true);
        setStudent(e._id);
        setDelId(e._id);
    };
    const hideModal = () => {
        setOpen(false);
    };
    const handleDelete = async (e) => {
        try {
            const del = await axios.delete(
                `${process.env.NEXT_PUBLIC_API}/users/delete-student/${delId}`
            );
            toast.success(del.data.msg);
        } catch (error) {
            toast.error(error.response.data.msg);
        }
        setOpen(false);
        getData();
    };
    const editStudent = (e) => {
        router.push(`/students/${e}`);
    };
    return (
        <div className="student">
            <Nav />
            <div className="container  pt-5">
                <div className="form pb-5">
                    <form>
                        <div className="search d-flex">
                            <input type="text" placeholder="بحث" />
                            <span>
                                <Image
                                    src="/images/icons/search.png"
                                    width={16}
                                    height={16}
                                    alt="search"
                                />
                            </span>
                            <Link
                                href="/add-new-student"
                                className="btn btn-dark d-flex"
                                onClick={(e) => {
                                    e.preventDefault();
                                    router.push("/add-new-student");
                                }}
                            >
                                <Image
                                    src="/images/icons/plus.png"
                                    width={20}
                                    height={20}
                                    alt="add"
                                />
                                <span>اضافة طالب</span>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="fillter">
                    <div className="section">
                        <select
                            className="form-control"
                            onChange={(e) => setSection(e.target.value)}
                        >
                            <option
                                value="يرجي اختيار الشعبة"
                                selected
                                disabled
                            >
                                يرجي اختيار الشعبة
                            </option>
                            <option value="علوم حاسب">علوم حاسب</option>
                            <option value="نظم ومعلومات">نظم ومعلومات</option>
                            <option value="محاسبة">محاسبة</option>
                            <option value="ادارة اعمال">ادارة اعمال</option>
                        </select>
                    </div>
                    <div className="Squad">
                        <select
                            className="form-control"
                            onChange={(e) => setSquad(e.target.value)}
                        >
                            <option
                                value="يرجي اختيار الفرقة"
                                selected
                                disabled
                            >
                                يرجي اختيار الفرقة
                            </option>
                            <option value="الفرقة الأولي">الفرقة الأولي</option>
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
                    <div className="submit">
                        <button className="btn btn-dark">بحث</button>
                    </div>
                </div>
                <div className="users mt-5">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">الرقم</th>
                                <th scope="col">صورة الطالب</th>
                                <th scope="col">اسم الطالب</th>
                                <th scope="col">الشعبة</th>
                                <th scope="col">الفرقة</th>
                                <th scope="col">الحالة الدراسية</th>
                                <th scope="col">التخصص</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((student, index) => {
                                return (
                                    <tr key={student.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_API}/public/images/students/${student.image}`}
                                                width={90}
                                                height={90}
                                                alt={student.name}
                                            />
                                        </td>
                                        <td>
                                            <div className="data">
                                                <div className="name">
                                                    {student.fristName +
                                                        " " +
                                                        student.lastName}
                                                </div>
                                                <Actions
                                                    editStudent={editStudent}
                                                    id={student._id}
                                                    showModal={showModal}
                                                    user={student}
                                                />
                                            </div>
                                        </td>
                                        <td>{student.section}</td>
                                        <td>{student.squad}</td>
                                        <td>{student.studyCase}</td>
                                        <td>{student.specialization}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <ModalCopmonent
                        showModal={showModal}
                        hideModal={hideModal}
                        open={open}
                        page="student"
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
        </div>
    );
};
export default Student;
