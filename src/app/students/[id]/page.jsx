"use client";
import Image from "next/image";
import Nav from "../../components/Nav";
import "../students.css";
import { useEffect, useState } from "react";
import axios from "axios";
import FormStudent from "../../components/formStudent";
import Header from "@/app/components/Headr";
const EditStudint = () => {
    const [image, setImage] = useState();
    const [imgFile, setImgFile] = useState("");

    const [student, setStudent] = useState({
        fristName: "",
        lastName: "",
        num: "",
        studyCase: "",
        squad: "",
        section: "",
        password: "",
        Specialization: "",
    });
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        try {
            const { data } = await axios.get(
                `${process.env.NEXT_PUBLIC_API}/users/get-student/${
                    window.location.pathname.split("/")[2]
                }`
            );
            setStudent(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("img", imgFile);
        formdata.append("fristName", student.fristName);
        formdata.append("lastName", student.lastName);
        formdata.append("num", student.num);
        formdata.append("squad", student.squad);
        formdata.append("studyCase", student.studyCase);
        formdata.append("section", student.section);
        formdata.append("password", student.password);
        formdata.append("Specialization", student.Specialization);
        try {
            const data = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/users/update-student/${
                    window.location.pathname.split("/")[2]
                }`,
                formdata
            );
        } catch (err) {
            console.log(err);
        }
    };
    const upImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImgFile(file);
        }
    };
    return (
        <div className="add-student">
            <Nav />
            <div className="container">
                <Header />

                <FormStudent
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    student={student}
                    setStudent={setStudent}
                    image={image}
                    upImage={upImage}
                    page="editStudint"
                />
            </div>
        </div>
    );
};
export default EditStudint;
