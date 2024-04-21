"use client";
import Image from "next/image";
import Nav from "../components/Nav";
import { useState } from "react";
import axios from "axios";
import FormStudent from "../components/formStudent";
import "./add-new-student.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Header from "../components/Headr";

const AddStudent = () => {
    const [image, setImage] = useState();
    const router = useRouter();
    const [imgFile, setImgFile] = useState("");
    const [disabled, setDisable] = useState(false);
    const [student, setStudent] = useState({
        fristName: "",
        lastName: "",
        num: "",
        studyCase: "",
        squad: "",
        section: "",
        password: "",
        specialization: "",
    });
    const upImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setImgFile(file);
        }
    };
    const handleChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        const formdata = new FormData();
        formdata.append("img", imgFile);
        formdata.append("fristName", student.fristName);
        formdata.append("lastName", student.lastName);
        formdata.append("num", student.num);
        formdata.append("studyCase", student.studyCase);
        formdata.append("squad", student.squad);
        formdata.append("section", student.section);
        formdata.append("password", student.password);
        formdata.append("specialization", student.specialization);
        e.preventDefault();
        setDisable(true);
        await axios
            .post(`${process.env.NEXT_PUBLIC_API}/users/add-new-user`, formdata)
            .then((res) => console.log(res))
            .then((res) => {
                toast.success(res.data.msg);
            })
            .then((res) => router.push("/students"))
            .then((res) => {
                setDisable(false);
            })
            .catch((err) => {
                console.log(err);
                setDisable(false);
            });
    };
    return (
        <div className="add-student row">
            <Nav />
            <div className="container col-10 px-5">
                <Header />
                <div className="form">
                    <div className="main pb-5">
                        <h1>تسجيل طالب جديد</h1>
                    </div>
                    <FormStudent
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        student={student}
                        setStudent={setStudent}
                        upImage={upImage}
                        image={image}
                        page="addNew"
                        disabled={disabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default AddStudent;
