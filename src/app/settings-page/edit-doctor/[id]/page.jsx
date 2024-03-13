"use client";
import { useEffect, useState } from "react";
import Nav from "@/app/components/Nav";
import Header from "@/app/components/Headr";
import FormStudent from "@/app/components/formStudent";
import "../../add-doc/add-doc.css";
import axios from "axios";
import { useRouter } from "next/navigation";
const EditDoctor = () => {
    const [doctor, setDoctor] = useState({
        fristName: "",
        lastName: "",
    });
    const [disabled, setDisable] = useState(false);
    const [image, setImage] = useState();
    const router = useRouter();
    const [imgFile, setImgFile] = useState("");
    const getDoctor = async () => {
        await axios
            .get(
                `${process.env.NEXT_PUBLIC_API}/doctor/get-doctor/${
                    window.location.pathname.split("/")[3]
                }`
            )
            .then((res) => setDoctor(res.data))
            .catch((error) => {
                console.log(error);
            });
    };
    const handleChange = (e) => {
        setDoctor({ ...doctor, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisable(true);
        const formdata = new FormData();
        formdata.append("img", imgFile);
        formdata.append("fristName", doctor.fristName);
        formdata.append("lastName", doctor.lastName);
        await axios
            .put(
                `${process.env.NEXT_PUBLIC_API}/doctor/update-doctor/${
                    window.location.pathname.split("/")[3]
                }`,
                formdata
            )
            .then((res) => setDoctor(res.data))
            .then((res) => {
                setDisable(false);
                router.push("/settings-page");
            })
            .catch((err) => {
                console.log(err);
                setDisable(false);
            });
    };
    useEffect(() => {
        getDoctor();
    }, []);
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
                <div className="header">
                    <Header />
                </div>
                <FormStudent
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    doctor={doctor}
                    disabled={disabled}
                    upImage={upImage}
                    page="add-doc"
                />
            </div>
        </div>
    );
};
export default EditDoctor;
