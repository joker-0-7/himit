"use client";
import Nav from "@/app/components/Nav";
import FormStudent from "@/app/components/formStudent";
import Header from "@/app/components/Headr";
import { useState } from "react";
import axios from "axios";
import "./add-doc.css";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const AddDoc = () => {
    const [image, setImage] = useState();
    const [imgFile, setImgFile] = useState("");
    const [doctors, setDoctors] = useState({
        fristName: "",
        lastName: "",
    });
    const [disabled, setDisable] = useState(false);
    const router = useRouter();
    const handleChange = (e) => {
        setDoctors({ ...doctors, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        const formdata = new FormData();
        formdata.append("img", imgFile);
        formdata.append("fristName", doctors.fristName);
        formdata.append("lastName", doctors.lastName);
        try {
            const data = await axios.post(
                `${process.env.NEXT_PUBLIC_API}/doctor/add-doctor`,
                formdata
            );
            toast.success(data.data.msg);
            setDisable(false);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg);
            setDisable(false);
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
        <div className="add-doc">
            <div className="row">
                <div className="col-2">
                    <Nav />
                </div>
                <div className="col-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="container">
                                <Header />
                                <div className="main-page">
                                    <div className="main-heading">
                                        <h1>اضافة دكتور</h1>
                                    </div>
                                    <FormStudent
                                        doctors={doctors}
                                        setDoctors={setDoctors}
                                        upImage={upImage}
                                        image={image}
                                        page="add-doc"
                                        handleSubmit={handleSubmit}
                                        handleChange={handleChange}
                                        disabled={disabled}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AddDoc;
